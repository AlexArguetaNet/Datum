
// GET: Get landing page
exports.getLandingPage = (req, res) => {

    // Check if user is logged in
    if (req.session.user) {
        res.redirect(`/user/home/${req.session.user._id}`);
    } else {
        res.render('index');
    }

}

// GET: Get the about us page
exports.getAboutPage = (req, res) => {
    res.render('main/about', { loggedIn: req.session.user });
}

// GET: Get the contact us page
exports.getContactUsPage = (req, res) => {
    res.render('main/contactUs', { loggedIn: req.session.user });
}

// GET: Get the login page
exports.getLoginPage = (req, res) => {
    res.render('main/login', { loggedIn: req.session.user });
}