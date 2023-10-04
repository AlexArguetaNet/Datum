const User = require('../models/user');
const mCollection = require('../models/collection');
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


// POST: Login the user
exports.login = async (req, res, next) => {

    const credentials = req.body;

    /**
     *  Checking if the user exists by searching
     * for email in the database
     */
    User.findOne({ email: credentials.email })
    .then((data) => {

        if (data) {

            // Compare password
            bcrypt.compare(credentials.password, data.password)
            .then((result) => {

                if (result) {
                    res.redirect(`/user/home/${data._id}`);
                } else {
                    console.log('Password Invalid');
                    res.redirect('/login');
                }
                
            })
            .catch((err) => {
                console.log(err);
                res.redirect('/login');
            });

        } else {
            console.log('Email invalid');
            res.redirect('/login');
        }

    })
    .catch((err) => {
        console.log
    });

}


// GET: Get the use home page
exports.getUserHomePage = async (req, res, next) => {

    // Get user id from query parameter
    const id = req.params.id;

    try {

        const collections = await mCollection.find({ user_id: id });

        User.findOne({ _id: id })
        .then((data) => {
            
            req.session.user = data;
            res.locals.loggedIn = data;
            req.session.save(() => {
                res.render('user/home', { user: data, collections: collections });
            });

        })
        .catch((err) => {
            next(err);
        });

    } catch(err) {
        res.json({msg:err});
    }

    

}

// GET: Logout the user
exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
}