import React, { PropTypes } from 'react';

class CommentForm extends React.Component {
  state = {
    author: '',
    text: ''
  }

  handleAuthorChange = e => {
    this.setState({
      author: e.target.value
    })
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return
    }

    this.props.onCommentSubmit({
      author,
      text
    })
    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    return (
      <div>
        <p>author: {this.state.author}</p>
        <p>text: {this.state.text}</p>
        <form className='commentForm' onSubmit={this.handleSubmit}>
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
