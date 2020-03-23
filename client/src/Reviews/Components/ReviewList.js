/* eslint-disable no-unused-vars */
import React from 'react'
import Review from './Review'

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.map((review) => (
        <Review
          review={review}
          key={review.id}/>
      ))}
    </div>
  )
}

export default ReviewList
