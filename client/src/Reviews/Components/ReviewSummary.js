import React from 'react'
// import CSSModules from 'react-css-modules'
import classnames from 'classnames' 
import AverageRating from './AverageRating.js'
import StarOverview from './StarOverview.js'
import SubmitReview from './SubmitReview.js'
const styles = require('./info.css')
console.log(styles)


const ReviewSummary = (props) => {
  console.log('props', props)
  const { average, stars, reviewTotal, post, showForm, onButtonClick } = props
  return (
    <div>
      <div className={ styles.infoContainer }>
        <AverageRating average={average} />
      </div>  
      <div className={ styles.infoContainer }>
        <StarOverview stars={stars} reviewTotal={reviewTotal} />
      </div> 
      <div className={ styles.infoContainer }>
      {!showForm && 
      <div className={styles.buttonContainer}>
        <button onClick={onButtonClick}>Write a Review</button>
      </div> }
        {showForm && <SubmitReview post={post} />}
      </div> 
    </div>
  )
}

export default ReviewSummary
