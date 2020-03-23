import React from 'react'
import moment from 'moment';
import styles from './components.css'

const ReviewDate = (props) => {
  return (
    <div className={styles.reviewDate}>
      {moment(props.date).format('MMM DD, YYYY')}
    </div>
  )
}

export default ReviewDate
