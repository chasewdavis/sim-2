module.exports = function checkForSession() {
    if (!req.session.user) {
        req.session.user = {
            username: ""
        }
    }
    next();
}