import React from 'react'
import classnames from 'classnames'
import styles from '../styles/SubmitReview.css'
import Modal from 'react-modal';

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
    console.log(event)
    event.preventDefault();
    this.props.post(this.state);
  }


  render() {
    return (
      <div>
      <Modal 
        className={styles.myModal}
        overlayClassName={styles.myOverlay}
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.closeModal}
        contentLabel="Compose Review"
      >

        <form className={styles.submitForm} onSubmit={this.handleSubmit} > Submit A Review
          <label className={styles.label} >
            <input className={styles.submitInput} type="text" placeholder={'Enter Username'} value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label className={styles.label} >
            <input className={styles.submitInput} type="text" placeholder={'Enter Review Title'} value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label className={styles.label} >
            <input className={styles.submitInput} type="text" placeholder={'Enter Review Body'} value={this.state.body} onChange={this.handleBodyChange} />
          </label>
          <label className={styles.submitInput} >
            <select type="text" value={this.state.rating} onChange={this.handleRatingChange} > 
              <option value="placeholder">Select Rating</option>  
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
          <input className={styles.reviewSubmit} type="submit" value="Submit" />
      </form>
      </Modal>
    </div>
    );
  }
}

export default SubmitReview













{/*  */}