const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const checkForSession = require('./checkForSession/checkForSession');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(`${__dirname}/public/build`))
app.use(session({
    secret: "Wir haben keine Geheimnisse",
    resave: false,
    saveUninitialized: false
}))
app.use(checkForSession);

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

const PORT = process.env.PORT  ||  3001;
const URL = require('./url/url');
const controller = require('./controller/controller');



app.post(`${URL}/register`, controller.registerUser);
app.post(`${URL}/login`, controller.login);
app.post(`${URL}/wizard/:user`, controller.addPropertyToUser);
app.get(`${URL}/properties/:user`, controller.getPropertiesByUser);
app.delete(`${URL}/properties/:user`, controller.deletePropertyFromUser);



app.listen(PORT, () => console.log(`listening on port ${PORT}`))
