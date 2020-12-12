
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./database/config');

const app = express();
const router = express.Router();


//Carrega os Models
const Empresa = require('./models/empresa');

//Carrega Rotas
const indexRoute = require('./routes/index-route');
const empresaRoute = require('./routes/empresa-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/empresa', empresaRoute);


module.exports = app;