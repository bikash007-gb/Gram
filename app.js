const express = require('express')
const bodyParser = require('body-parser')

const reportRoute = require('./routes/reportRoute')
const app = express()
app.use(bodyParser.json())

app.use('/reports',reportRoute)
module.exports = app;