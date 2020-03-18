
import 'react-dropdown/style.css'
import React from 'react'
import Dropdown from 'react-dropdown'
const options = [
  1, 2, 3, 4, 5, 'ALL'
]
const defaultOption = options[0]

class SortBy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selection: 0
    }
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect (rating) {
    console.log(rating)
    this.props.handleRatingSelection(rating)
  }

  render () {
    return (
      <div>
        <Dropdown
          options={options}
          onChange={(option) => this.onSelect(option)}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    )
  }
}
export default SortBy
