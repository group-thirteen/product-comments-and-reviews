import React from 'react'
import styles from './components.css'



const StarRating = (props) => {
  const { reviewTotal, rating, starNumber } = props
  let style = {width: `${(rating/reviewTotal) * 100}%`}
  return (
    <div className={styles['starbar-container']}>
      <span className={styles['starbar-labels']}>
      {starNumber} {`star${starNumber === 1 ? '  ' : 's'}`}
      </span>
      <div className={styles['star-background']} >
        <div className={styles['star-bar']} style={style} />
      </div>
      <span className={styles['starbar-labels']}>
        {rating}
      </span>
    </div>
   
  )
}

export default StarRating