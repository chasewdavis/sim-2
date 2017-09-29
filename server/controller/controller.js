module.exports = {
    registerUser: (req, res, next) => {
        const db = req.app.get('db');
        let { username, password } = req.body
        db.addUser(username, password)
            .then(db.createPropertyTable(username))
            .then(res.status(200).send(username))
            .catch(() => res.status(500).send('something went wrong'))        
    },
    login: () => {
        if (req.body.username && req.body.password) {
            const db = req.app.get('db')
            let { username, password } = req.body
            db.selectUser(username, password)
            .then(user => req.session.username = user.username)
        }
    },
    addPropertyToUser: (req, res, next) => {
        const db = req.app.get('db');
        let { username } = req.params
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
        let { username } = req.body;
        db.getProperties(username)
            .then(properties => res.status(200).send(properties))
        .catch(() => res.status(500)).send('something went wrong')
    }

}