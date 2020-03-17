
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
// const faker = require('faker')

var reviewSchema = mongoose.Schema({
  title: String,
  username: { type: String, unique: true },
  body: String,
  score: Number,
  date: Date
})

const handleError = (error) => {
  console.log('error in db cb store: ', error)
}

const get = (callback) => {
  const Review = mongoose.model('review', reviewSchema)
  Review.find((err, results) => { callback(err, results) })
}

const Review = mongoose.model('Review', reviewSchema)
const store = (callback) => {
  const newReview = new Review({
  })
  newReview.save((err) => {
    if (err) {
      return handleError(err)
    } else {
      console.log('success prior to DB store')
      callback(err)
    }
  })
}

module.exports = { store, get }
