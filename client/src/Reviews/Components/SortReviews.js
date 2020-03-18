import React from 'react'

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'sort'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('dropdown selection:', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort reviews:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="all">All reviews</option>
            <option value="stars">Star Rating</option>
            <option value="time">Submission Time</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SortReviews
