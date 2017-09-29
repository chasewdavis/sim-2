module.exports = {
    registerUser: (req, res, next) => {
        const db = req.app.get('db');
        let { username, password } = req.body
        db.addUser(username, password)
            .then(res.status(200).send(username))
            .catch(() => res.status(500).send('something went wrong'))
    },
    login: (req, res, next) => {
        if (req.body.username && req.body.password) {
            let { username, password } = req.body
            const db = req.app.get('db')
            db.selectUser(username, password)
                .then(user => {
                    req.session.username = user.username
                    req.session.userid = user.userid
                    res.status(200).send(`successfully logged in ${req.body.username}`)
                })
        }
        else {
            res.status(500).send('something went wrong')
        }
    },
    addPropertyToUser: (req, res, next) => {
        const db = req.app.get('db');
        let { userid } = req.session
        let { property, description, address, city, state, zip, imgurl, loan, mortgage, rent } = req.body
        db.addProperty(property, description, address, city, state, zip, imgurl, mortgage, rent)
            .then(res.status(200).send(username))
            .catch(() => res.status(500).send('something went wrong'))
    },
    deletePropertyFromUser: (req, res, next) => {
        const db = req.app.get('db');
        let { username } = req.params
        let { property } = req.body;
        db.deleteProperty(username, property)
            .then(res.status(200).send(username))
            .catch(() => res.status(500).send('something went wrong'))
    },
    getPropertiesByUser: (req, res, next) => {
        const db = req.app.get('db');
        let { userid } = req.session;
        console.log(userid)
        db.getProperties(userid)
            .then(properties => res.status(200).send(properties))
            .catch(() => res.status(500).send('something went wrong'))
    },
    get: (req, res, next) => {
        console.log('it worked')
        res.send('it worked')
    },
    getUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.getUsers().then(users => res.send(users))
    }
}