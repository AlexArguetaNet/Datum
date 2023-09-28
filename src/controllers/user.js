
// POST: Add a new user to the database
exports.createUser = async (req, res, next) => {

    req.session.user = req.body;
    res.locals.user = req.body;

    res.render('user/home');

}

// POST: Logout the user
exports.logout = (req, res, next) => {
    req.session.destroy;
    res.redirect('/');
}