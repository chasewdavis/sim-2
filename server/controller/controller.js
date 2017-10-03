module.exports = {
    registerUser: (req, res, next) => {
        const db = req.app.get('db')
        let { username, password } = req.body
        db.addUser(username, password)
            .then(res.status(200).send({ username, password }))
            .catch(() => res.status(500).send('something went wrong'))
    },
    login: (req, res, next) => {
        if (req.body.username && req.body.password) {
            let { username, password } = req.body
            const db = req.app.get('db')
            db.selectUser(username, password)
                .then(user => {
                    req.session.user.username = user[0].username
                    req.session.user.userid = user[0].userid
                    console.log(req.session.user)
                    res.status(200).send(req.session.user)
                })
        }
        else {
            res.status(500).send('something went wrong')
        }
    },
    logout: (req, res, next) => {
        let name = req.session.user.username
        console.log(name)
        req.session.destroy()
        res.status(200).send(`successfully logged out ${name}`)
    },
    addPropertyToUser: (req, res, next) => {
        const db = req.app.get('db')
        let { userid } = req.session
        let { property, description, address, city, state, zip, imgurl, loan, mortgage, rent } = req.body
        db.addProperty(property, description, address, city, state, zip, imgurl, mortgage, rent)
            .then(res.status(200).send(req.session.username))
            .catch(() => res.status(500).send('something went wrong'))
    },
    deletePropertyFromUser: (req, res, next) => {
        const db = req.app.get('db')
        let { username } = req.params
        let { property } = req.body
        db.deleteProperty(username, property)
            .then(res.status(200).send(username))
            .catch(() => res.status(500).send('something went wrong'))
    },
    getPropertiesByUser: (req, res, next) => {
        const db = req.app.get('db')
        let { userid } = req.session.user
        console.log(req.session.user)
        db.getProperties(userid)
            .then(properties => res.status(200).send(properties))
            .catch(() => res.status(500).send('something went wrong'))
    },
    get: (req, res, next) => {
        console.log('it worked')
        res.send('it worked')
    },
    getUsers: (req, res, next) => {
        const db = req.app.get('db')
        db.getUsers().then(users => res.send(users))
    },
    getAllProperties: (req, res, next) => {
        const db = req.app.get('db')
        db.getAllProperties().then(properties => res.send(properties))
    }
}