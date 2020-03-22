/* eslint-disable no-unused-vars */

import React from 'react'
import styles from './components.css'
import ReviewTitle from './ReviewTitle'
import ReviewBody from './ReviewBody'
import ReviewUsername from './ReviewUsername'
import ReviewRating from './ReviewRating'
import ReviewDate from './ReviewDate'

const Review = (props) => {
  return (
    <div className={styles.review}>
      <ReviewRating rating={props.review.score} />
      <ReviewTitle title={props.review.title} />
      <ReviewBody body={props.review.body} />
      <ReviewUsername username={props.review.username} />
      <ReviewDate date={props.review.date} />
    </div>
  )
}

export default Review
