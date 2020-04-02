
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/nordstrom', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
// mongoose.connect('mongodb://localhost/nordstrom')

const faker = require('faker')

const reviewSchema = mongoose.Schema({
  title: String,
  username: String,
  body: String,
  score: Number,
  date: Number
})
const Review = mongoose.model('Review', reviewSchema)

const milliDate = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0)
}

const seed = () => {
  for (let j = 0; j < 20; j++) {
    const newReview = new Review({
      title: faker.random.words(3),
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      body: faker.random.words(12),
      score: (Math.floor(Math.random() * 5) + 1),
      date: milliDate(1269148117612, Date.now())
    })
    console.log('newREview:', newReview)
    newReview.save((err) => {
      if (err) {
        console.log('error in SEED DB', err)
      } else {
        console.log('review was stored')
      }
    })
  }
}
seed()
console.log('THE SEED JUST RAN')
