import React from 'react'
import { ajax } from 'jquery'
import Title from './Title'
import ReviewList from './Reviews/Components/ReviewList.js'
import AverageRating from './Reviews/Components/AverageRating.js'
import SortBy from './Reviews/Components/SortBy.js'
import StarOverview from './Reviews/Components/StarOverview.js'

class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      average: 0,
      stars: {}
    }
    this.get = this.get.bind(this)
    this.handleNewReviews = this.handleNewReviews.bind(this)
    this.getRatingTotal = this.getRatingTotal.bind(this)
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
    this.getRatingTotal(reviews)
    this.setState({ average, reviews })
    console.log('THE STATE',this.state)
  }

  getRatingTotal (reviews) {
    let stars = {
      1: 0,
      2: 0, 
      3: 0,
      4: 0,
      5: 0
    }
    reviews.forEach((review) => {
      stars[review.score]++
    })
    this.setState({ stars })
  }

  render () {
    return (
      <div>
        <SortBy />
        <StarOverview stars={this.state.stars} reviewTotal={this.state.reviews.length} />
        <Title />
        <AverageRating average={ this.state.average } />
        <ReviewList reviews={ this.state.reviews } />

      </div>
    )
  }
}

export default Reviews
