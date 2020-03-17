import React from 'react'
import { ajax } from 'jquery'
import Title from './Title'
import ReviewList from './Reviews/Components/ReviewList.js'
import AverageRating from './Reviews/Components/AverageRating.js'
import SortBy from './Reviews/Components/SortBy.js'

class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      average: 0
    }
    this.get = this.get.bind(this)
    this.handleNewReviews = this.handleNewReviews.bind(this)
  }

  componentDidMount () {
    this.get()
  }

  get () {
    ajax({
      method: 'GET',
      url: '/reviews',
      data: {},
      success: (reviews) => { this.handleNewReviews(reviews) },
      error: () => { console.log('Failed in the get') }
    })
  }

  handleNewReviews (reviews) {
    let sum = 0
    reviews.forEach((review) => {
      sum += review.score
    })
    const average = sum / reviews.length
    this.setState({ average, reviews })
  }

  render () {
    return (
      <div>
        <SortBy />
        <Title />
        <AverageRating average={ this.state.average } />
        <ReviewList reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default Reviews
