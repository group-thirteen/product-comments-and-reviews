import React from 'react'

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
    console.log('username:', event.target.value)
    this.setState({username: event.target.value});
  }

  handleTitleChange(event) {
    console.log('title:', event.target.value)
    this.setState({title: event.target.value});
  }

  handleBodyChange(event) {
    console.log('body:', event.target.value)
    this.setState({body: event.target.value});
  }

  handleRatingChange(event) {
    console.log('rating:', event.target.value)

    this.setState({rating: event.target.value});
  }
  handleSubmit(event) {
    this.props.post(this.state);
    event.preventDefault();
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            Review:
            <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
          </label>
          <label>
            Rating:
            <input type="text" value={this.state.rating} onChange={this.handleRatingChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SubmitReview