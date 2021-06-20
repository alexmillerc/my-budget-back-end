const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

_ = require('./database/mongo.database');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const accountRoute = require('./routes/account.route');
const userRoute = require('./routes/user.route');
app.use('/api/v1/accounts', accountRoute);
app.use('/api/v1/users', userRoute);

const port = process.env.PORT || 9000;
let server = app.listen(port, () => console.log(`api port ${port}`));

module.exports = server;