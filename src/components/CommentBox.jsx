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
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		)
	}
}
const data = [
	{id: 1, author: 'Pete Hunt', text: 'This is one comment'},
	{id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
]
const rootFromHjsWebpack = $("#root")[0];
ReactDOM.render(<CommentBox data={data}/>, rootFromHjsWebpack);
