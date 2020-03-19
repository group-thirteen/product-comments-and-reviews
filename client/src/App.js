import React from 'react'
import { ajax } from 'jquery'
import Title from './Title'
import ReviewList from './Reviews/Components/ReviewList.js'
import AverageRating from './Reviews/Components/AverageRating.js'
import FilterReviews from './Reviews/Components/FilterReviews.js'
import StarOverview from './Reviews/Components/StarOverview.js'
import SubmitReview from './Reviews/Components/SubmitReview.js'
import SortReviews from './Reviews/Components/SortReviews.js'

class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      average: 0,
      stars: {},
      filteredReviews: null,
      showForm: false,
    }
    this.get = this.get.bind(this)
    this.handleNewReviews = this.handleNewReviews.bind(this)
    this.getRatingTotal = this.getRatingTotal.bind(this)
    this.post = this.post.bind(this)
    this.handleRatingSelection = this.handleRatingSelection.bind(this)
    this.sortStarRating = this.sortStarRating.bind(this)
    this.sortByTime = this.sortByTime.bind(this)
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
  post (review) {
    console.log('review before', review)
    ajax({
      method: 'POST',
      url: '/reviews',
      data: review,
      success: () => {console.log('posted review')},
      error: () => {console.log('error in the post')}
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

  handleRatingSelection (rating) {
    const filtered = this.state.reviews.filter((review) => (
      (rating === 0) || (review.score === rating)
      ))
    this.setState({ filteredReviews: filtered })
  }
  
  sortStarRating() {
    const sorted = this.state.reviews.sort((a, b) => {
      if (a.score < b.score) {
        return -1
      }
      if (a.score > b.score) {
        return 1
      }
      return 0
    })
    this.setState({ reviews: sorted })
  }

  sortByTime () {
    const sorted = this.state.reviews.sort((a, b) => {
      if (a.date < b.date) {
        return -1
      }
      if (a.date > b.date) {
        return 1
      }
      return 0
    })
    this.setState({ reviews: sorted })
  }

  render () {
    return (
      <div>
        <FilterReviews handleRatingSelection={this.handleRatingSelection}/>
        <StarOverview stars={this.state.stars} reviewTotal={this.state.reviews.length} />
        <Title />
        <SortReviews starSortFunc={this.sortStarRating} timeSortFunc={this.sortByTime} />
        {!this.state.showForm && <button onClick={() => (this.setState({showForm: true}))}>Write a Review</button>}
        {this.state.showForm && <SubmitReview post={ this.post }/>}
        <AverageRating average={ this.state.average } />
        <ReviewList reviews={ this.state.filteredReviews || this.state.reviews } />
      </div>
    )
  }
}

export default Reviews
