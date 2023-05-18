'use strict'
const express = require("express");
const path = require('path')
const port = process.env.PORT || 3001;
const routes = require('./src/routes/index');
const logger = require('morgan')

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;