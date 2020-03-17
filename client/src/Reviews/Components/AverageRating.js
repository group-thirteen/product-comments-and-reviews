import React from 'react'

const AverageRating = (props) => {
  console.log('inside AveaRating', props)
  return (
    <h3>
      Average Rating {props.average}
    </h3>
  )
}

export default AverageRating
