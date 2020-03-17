
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nordstromPrac')
const faker = require('faker')

const reviewSchema = mongoose.Schema({
  title: String,
  username: String,
  body: String,
  score: Number,
  date: Date
})
const Review = mongoose.model('Review', reviewSchema)

// implement a check if DB exsists, dont run post request to seed the data, refactor this
const seed = () => {
  for (let j = 0; j < 100; j++) {
    const newReview = new Review({
      title: faker.random.words(8),
      username: faker.name.firstName() + faker.name.lastName(),
      body: faker.random.words(20),
      score: (Math.floor(Math.random() * 5) + 1),
      data: faker.date.past(20)
    })
    newReview.save((err) => {
      if (err) {
        console.log('error in SEED DB')
      } else {
        console.log('review was stored')
      }
    })
  }
}
seed()
