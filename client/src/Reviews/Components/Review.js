/* eslint-disable no-unused-vars */

import React from 'react'
import ReviewTitle from './ReviewTitle'
import ReviewBody from './ReviewBody'
import ReviewUsername from './ReviewUsername'
import ReviewRating from './ReviewRating'

const Review = (props) => {
  return (
    <div>
      <ReviewTitle title={props.review.title} />
      <ReviewBody body={props.review.body} />
      <ReviewUsername username={props.review.username} />
      <ReviewRating rating={props.review.score} />
    </div>
  )
}

export default Review
