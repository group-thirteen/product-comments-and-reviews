import React from 'react'
import styles from './FilterContainer.css'


class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'sort'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if(event.target.value === 'stars') { this.props.starSortFunc() }
    if(event.target.value === 'time') { this.props.timeSortFunc() }
    console.log(this.state.value)
  }

  render() {
    return (
      <form >
        <label>
          <select className={styles.select} value={this.state.value} onChange={this.handleChange}>
            <option value="all">Sort reviews</option>
            <option value="stars">Star Rating</option>
            <option value="time">Submission Time</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortReviews
