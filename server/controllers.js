
const db = require('../database/index.js')

const get = (req, res) => {
  console.log('get in controller')
  db.get((err, data) => {
    if (err) {
      console.log('error in the controller')
      res.send(400)
    } else {
      console.log('presuccess response:')
      res.send(data)
    }
  })
}

const post = (req, res) => {
  console.log('in the controller', req.body)
  db.store(req.body, (err) => {
    if(err) {
      res.send(400)
    } else {
      db.get((err, data) =>{
        if(err) {
          res.send(400)
        } else {
          res.send(data)
        }
      })
    }
  })
}

module.exports = { get, post }
