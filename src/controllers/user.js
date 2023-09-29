const User = require('../models/user');
const bcrypt = require('bcrypt');

// POST: Add a new user to the database
exports.createUser = async (req, res, next) => {

    const newUser = req.body;
    
    // Hash the user's password
    newUser.password = await bcrypt.hash(newUser.password, 10);

    User.create(newUser)
    .then((data) => {

        // Set user id as a query parameter
        res.redirect(`/user/home/${data._id}`);

    })
    .catch((err) => {
        next(err);
    })

}

// GET: Logout the user
exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
}

// GET: Get the use home page
exports.getUserHomePage = (req, res, next) => {

    // Get user id from query parameter
    const id = req.params.id;

    User.findOne({ _id: id })
    .then((data) => {
        
        
        req.session.user = data;

        req.session.save(() => {
            res.render('user/home', { user: data });
        });

    })
    .catch((err) => {
        next(err);
    });

}