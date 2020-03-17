
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const dateFormat = require('dateformat');
const now = new Date();

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
const store = (review, callback) => {
  const newReview = new Review({
    title: review.title,
    username: review.username,
    body: review.body,
    score: review.rating,
    date: dateFormat(now, 'isoDateTime')
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
