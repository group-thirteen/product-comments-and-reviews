import React from 'react'

import FilterReviews from './FilterReviews.js'
import SortReviews from './SortReviews.js'
import styles from './FilterContainer.css'

const FilterContainer = (props) => {
  const { handleRatingSelection, starSortFunc, timeSortFunc } = props
  return (
    <div className={styles.container}>
      <div className={styles.sortDropdown}>
        <SortReviews starSortFunc={starSortFunc} timeSortFunc={timeSortFunc} />
      </div>
      <div className={styles.container}>
        <FilterReviews handleRatingSelection={handleRatingSelection} />
      </div>
    </div>
  )
}

export default FilterContainer
