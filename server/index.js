
const Controller = require('./controllers.js')
const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/reviews', Controller)

// app.get('/reviews', function (req, res) {
//   Controller.get(req, res)
// })

// app.post('/reviews', (req, res) => {
//   Controller.post(req, res)
// })

app.listen(port, () => console.log(`Running on port: ${port}`))
