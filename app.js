'use strict'
require('dotenv').config()
const express = require("express");
const path = require('path')
const port = process.env.PORT || 3000;
const routes = require('./src/routes/index');
const logger = require('morgan')
const db = require('./src/models/index')

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

routes(app)

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    })
    .catch((err) => console.log('Unable to connect to the database:', err));


module.exports = app;