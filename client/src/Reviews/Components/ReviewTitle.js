/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './components.css'


const ReviewTitle = (props) => {
  return (
    <div className={styles.reviewTitle}>
      {props.title}
    </div>
  )
}

export default ReviewTitle
