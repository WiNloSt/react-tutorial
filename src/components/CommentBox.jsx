import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class CommentBox extends React.Component {
  render() {
    return (
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
      </div>
    )
  }
}

const rootNode = $("#root")[0];
ReactDOM.render(<CommentBox/>, rootNode);
