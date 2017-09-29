module.exports = {
    registerUser: (req, res, next) => {
        const db = req.app.get('db');
        db.addUser(req.body.username, req.body.password)
            .then(db.createPropertyTable(req.body.username))
        .then(res.status(200).send())
    },
    addPropertyToUser: (req, res, next) => {
        const db = req.app.get('db');
        let { username, property, description, address, city, state, zip, imgurl, loan, mortgage, rent } = req.body
        db.addProperty(property, description, address, city, state, zip, imgurl, mortgage, rent)
    },
    deleteProperty: (req, res, next) => {
        const deb = req.app.get('db');
        let { username, property } = req.body;
        db.deleteProperty(username, property)
    },
    getProperties: (req, res, next) => {

    }

}