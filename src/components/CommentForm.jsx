import React, { PropTypes } from 'react';

class CommentForm extends React.Component {
  state = {
    author: '',
  }


  render() {
    return (
      <form className='commentForm'>
        <input placeholder='Your name' />
        <input placeholder='Say something...' />
        <button type='submit'>Post</button>
      </form>
    )
  }
}

export default CommentForm;
