const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(`${__dirname}/public/build`))

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

const PORT = process.env.PORT  ||  3001;
const URL = require('./url/url');
const controller = require('./controller/controller');


app.post(`${URL}/register`, controller.registerUser);


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
