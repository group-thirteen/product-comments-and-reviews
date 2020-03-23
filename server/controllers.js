var express = require('express')
var router = express.Router()
const db = require('../database/index.js')

router.get('/', (req, res) => {
  console.log('get in controller')
  db.get((err, data) => {
    if (err) {
      console.log('error in the controller')
      res.send(400)
    } else {
      res.send(data)
    }
  })
})

router.post('/', (req, res) => {
  db.store(req.body, (err) => {
    if(err) {
      res.send(400)
    } else {
      db.get((err, data) => {
        if(err) {
          res.send(400)
        } else {
          res.send(data)
        }
      })
    }
  })
})

module.exports = router
