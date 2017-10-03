module.exports = function checkForSession(req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            username: "",
            userid: -1
        }
    }
    console.log(req.session.user)
    next();
}