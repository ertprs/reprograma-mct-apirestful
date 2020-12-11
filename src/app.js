'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega Rotas
const indexRoute = require('./routes/index-route');
const empresaRoute = require('./routes/empresa-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/empresa', empresaRoute);


module.exports = app;