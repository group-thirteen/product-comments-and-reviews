/* eslint-disable no-unused-vars */

import React from 'react'
import styles from './components.css'


const ReviewBody = (props) => {
  return (
    <div className={styles.reviewBody}>
      {props.body}
    </div>
  )
}

export default ReviewBody
