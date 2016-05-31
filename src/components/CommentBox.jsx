import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
	render() {
		return (
			<div className='commentBox'>
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		)
	}
}

const rootNode = $("#root")[0];
ReactDOM.render(<CommentBox/>, rootNode);
