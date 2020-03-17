
import 'react-dropdown/style.css'
import React from 'react'
import Dropdown from 'react-dropdown'
const options = [
  'one', 'two', 'three', 'four', 'five'
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

  onSelect (option) {
    console.log('changed', option.value)
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
