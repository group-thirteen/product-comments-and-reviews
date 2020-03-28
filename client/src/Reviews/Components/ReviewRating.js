/* eslint-disable no-unused-vars */
import React from 'react'
import StarRatings from 'react-star-ratings';

import styles from './components.css'

const ReviewRating = (props) => {
  return (
    <div className='reviewRating'>
      <StarRatings 
        rating={props.rating}
        starRatedColor='black'
        numberOfStars={5}
        name='rating'
        starDimension="20px"
        starSpacing="0px"
      />
    </div>
  )
}

export default ReviewRating
