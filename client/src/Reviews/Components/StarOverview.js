import React from 'react'
import StarRating from './StarRating'
const options = [1, 2, 3, 4, 5]

const StarOverview = (props) => {
  return (
    <div className='star-overview'>
      {
        options.map((rating) => (
          <StarRating 
            rating={props.stars[rating]}
            starNumber={rating} 
            reviewTotal={props.reviewTotal}
          />
        ))
      }
    </div>
  )
}

export default StarOverview