/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './components.css'

const ReviewRating = (props) => {
  return (
    <div className='reviewRating'>
      {props.rating} / 5
    </div>
  )
}

export default ReviewRating
