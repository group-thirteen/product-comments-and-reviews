import React from 'react'
import styles from './components.css'


const ReviewUsername = (props) => {
  return (
    <div className={styles.reviewUsername}>
      {props.username}
    </div>
  )
}

export default ReviewUsername
