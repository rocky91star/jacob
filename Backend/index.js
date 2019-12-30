const express = require('express');
const app = express();
const fs = require('fs');
const query = require('querystring');
const bodyparser = require('body-parser');
let cors = require('cors');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
   useNewUrlParser: true
}).then(() => {
   console.log('Successfully connected to the database');
}).catch(err => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});

require('./app/routes/Employees.routes')(app);

const port = 7000;
app.listen(port, () => console.log("App is running on port 7000"));
