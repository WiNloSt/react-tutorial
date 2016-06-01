import React, { PropTypes } from 'react'
import Comment  from './Comment.jsx'

class CommentList extends React.Component {
  render() {
    const commentNodes = this.props.data.map(comment => (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    ));

    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
}

export default CommentList;
