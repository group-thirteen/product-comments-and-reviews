import React from 'react'
import './components.css'


const StarRating = (props) => {
  const { reviewTotal, rating, starNumber } = props
  let style = {width: `${(rating/reviewTotal) * 100}%`}
  return (
    <div className='star-background' >
      <div className='star-bar' style={style}>
        {`${starNumber}: ${rating/reviewTotal}`}
      </div>
    </div>
  )
}

export default StarRating