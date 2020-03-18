
import 'react-dropdown/style.css'
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
      <form >
        <label>
          Filter rating:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={4}>Four</option>
            <option value={5}>five</option>
          </select>
        </label>
      </form>
    )
  }
}

export default FilterReviews


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}