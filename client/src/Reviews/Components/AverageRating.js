import React from 'react'

const AverageRating = (props) => {
  return (
    <div>
      Average Rating {props.average.toFixed(2)}
    </div>
  )
}

export default AverageRating
