import React from 'react'
import classnames from 'classnames'
import styles from './SubmitReview.css'

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      body: '',
      rating: '',
      date: Date.now()
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value});
  }

  handleRatingChange(event) {
    const starNum = Number(event.target.value)
    this.setState({rating: starNum});
  }
  handleSubmit(event) {
    this.props.post(this.state);
    event.preventDefault();
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label className={classnames(styles.label, styles.username)} >
            Username:
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label className={classnames(styles.label, styles.title)} >
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label className={classnames(styles.label, styles.body)} >
            Review:
            <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
          </label>
          <label className={classnames(styles.label, styles.rating)} >
            <select type="text" value={this.state.rating} onChange={this.handleRatingChange} > Rating
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SubmitReview
