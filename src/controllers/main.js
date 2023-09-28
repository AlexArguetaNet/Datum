
// GET: Get landing page
exports.getLandingPage = (req, res) => {

    // Check if user is logged in
    if (req.session.user) {
        res.redirect(`/user/home/${req.session.user._id}`);
    } else {
        res.render('index');
    }

}