'use strict';

console.log(`
3.
---

We need to create a route that downloads the entire database to a .csv file.
The endpoint must be set to: GET /users

Make sure to have an instance of MongoDB running at: mongodb://localhost

Run the database seed with:
$ node utils/seed.js

-> Warning: It contains hundreds of entities and our production server is quite small
`);

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// parse applicattion /x-www/form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require('./config/config');
app.use(cors());
app.use(require('./config/headers'));

app.use(require('./routes/indexRoutes'));

// Setup database
mongoose.Promise = Promise;
mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {
    if (err) console.log(err);
    console.log('DB Connection sucessfully', process.env.URL_DB);
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});

console.log(` REMENBER TO ADD A .env file inside config folder, follow this sample
NODE_ENV=dev
DB_HOST=localhost
HOST=localhost
PORT=3000
DB_NAME=mediastream-challenge
DB_PORT=27017
SEED=token-seed-dev
TIME_TOKEN=12h

later you can use npm run start-dev
`);