
const Controller = require('./controllers.js')
const express = require('express')
const path = require('path')
const app = express()
const port = 8080
var bodyParser = require('body-parser')
// const Controller = require('./controllers.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/reviews', function (req, res) {
  Controller.get(req, res)
})

app.listen(port, () => console.log(`Running on port: ${port}`))
