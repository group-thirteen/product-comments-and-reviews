
const mongoose = require('mongoose')
mongoose.connect('mongodb//mongo:27017/nordstrom')
// const connection = "mongodb://mongo:27017/mongo-test";
// const connection = "mongodb://mongo:27017/nordstromPrac";

// const connectDb = () => {
//   return mongoose.connect(connection);
// };

var reviewSchema = mongoose.Schema({
  title: String,
  username: { type: String, unique: true },
  body: String,
  score: Number,
  date: Number
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
    date: Date.now()
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

module.exports = { store, get}
