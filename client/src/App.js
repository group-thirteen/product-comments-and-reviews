import React from 'react'
import { ajax } from 'jquery'
import Title from './Title'
import ReviewList from './Reviews/Components/ReviewList.js'
import Info from './Reviews/Components/ReviewSummary.js'
import FilterContainer from './Reviews/Components/FilterContainer'
import styles from './App.css'
import './global.css'
import ReactPaginate from 'react-paginate';

class Reviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      average: 0,
      stars: {},
      filteredReviews: null,
      showForm: false,
      pagination: {
        offset: 0,
        perPage: 5
      }

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
      success: (reviews) => { this.handleNewReviews(reviews) },
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
    this.setState({ average, reviews, pageCount: Math.ceil(reviews.length / this.state.pagination.perPage) }, () => (console.log('this.state' ,this.state)))
    this.sortByTime()

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
      if (a.score > b.score) {
        return -1
      }
      if (a.score < b.score) {
        return 1
      }
      return 0
    })
    this.setState({ reviews: sorted })
  }

  sortByTime () {
    const sorted = this.state.reviews.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0
    })
    this.setState({ reviews: sorted })
  }

  handlePageClick () {
    const getPage = (offSet, reviewsPerPage) => {
      
    }
  }  


  render () {
    return (
      <div className={styles.AppContainer}>
        <Title />
        <Info 
          average={ this.state.average } 
          post={ this.post } 
          showForm={ this.state.showForm } 
          onButtonClick={() => (this.setState({showForm: true}))} 
          stars={this.state.stars} 
          reviewTotal={this.state.reviews.length} 
          />
        <FilterContainer 
          handleRatingSelection={this.handleRatingSelection} 
          starSortFunc={this.sortStarRating} 
          timeSortFunc={this.sortByTime} />
        <ReviewList reviews={ this.state.filteredReviews || this.state.reviews } />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default Reviews
