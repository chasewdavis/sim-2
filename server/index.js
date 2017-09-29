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
app.post(`${URL}/wizard/:userid`, controller.addPropertyToUser);

app.get(`${URL}/properties/:userid`, controller.getPropertiesByUser);

app.delete(`${URL}/properties/:userid`, controller.deletePropertyFromUser);



app.listen(PORT, console.log(`listening on port ${PORT}`))
