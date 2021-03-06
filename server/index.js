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

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(checkForSession);

const PORT = process.env.PORT || 3001;
const URL = require('./url/url');
const controller = require('./controller/controller');


app.get('/api/housing/getusers', controller.getUsers)

app.post(`${URL}/register`, controller.registerUser);
app.post(`${URL}/login`, controller.login);
app.post(`${URL}/wizard/`, controller.addPropertyToUser);
app.post(`${URL}/logout`, controller.logout);

app.get(`${URL}/properties/:id`, controller.getPropertiesByUser);
app.get(`${URL}/getallproperties`, controller.getAllProperties)

app.delete(`${URL}/properties/`, controller.deletePropertyFromUser);



app.listen(PORT, console.log(`listening on port ${PORT}`))
