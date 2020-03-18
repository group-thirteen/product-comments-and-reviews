import React from 'react'
import './components.css'


const StarRating = (props) => {
  const { reviewTotal, rating, starNumber } = props
  let style = {width: `${(rating/reviewTotal) * 100}%`}
  return (
    <div className='starbar-container'>
      <span className='starbar-labels'>
      {starNumber}
      </span>
      <div className='star-background' >
        <div className='star-bar' style={style} />
      </div>
      <span className='starbar-labels'>
        {rating}
      </span>
    </div>
   
  )
}

export default StarRating