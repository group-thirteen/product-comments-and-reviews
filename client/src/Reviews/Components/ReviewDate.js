import React from 'react'
import moment from 'moment';

const ReviewDate = (props) => {
  return (
    <div className='reviewDate'>
      {moment(props.date).format('MMM/DD/YYYY')}
    </div>
  )
}

export default ReviewDate
