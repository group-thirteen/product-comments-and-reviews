
import React from 'react'

class FilterReviews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selection: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleRatingSelection(Number(event.target.value))
  }

  render () {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange} >
            <option value={0}>star rating</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={4}>Four</option>
            <option value={5}>Five</option>
          </select>
        </label>
      </form>
    )
  }
}

export default FilterReviews
