import React from 'react'
import StarRatings from 'react-star-ratings';

const AverageRating = (props) => {
  return (
    <div>
      <StarRatings
          rating={props.average}
          starRatedColor='black'
          numberOfStars={5}
          name='rating'
          starDimension="24px"
          starSpacing="0px"
        />
        ({props.reviewTotal})
    </div>
  )
}

export default AverageRating
