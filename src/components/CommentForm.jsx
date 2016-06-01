import React, { PropTypes } from 'react';

class CommentForm extends React.Component {
  state = {
    author: '',
    text: ''
  }

  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>author: {this.state.author}</p>
        <p>text: {this.state.text}</p>
        <form className='commentForm'>
          <input
            placeholder='Your name'
            value={this.state.author}
            onChange={this.handleAuthorChange}
            />
          <input
            placeholder='Say something...'
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
