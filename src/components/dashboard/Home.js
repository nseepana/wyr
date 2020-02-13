import React, { Component } from 'react'
import Card from './Card';

export default class Home extends Component {
	render() {
		// console.log(this.props);
		return (
			<React.Fragment>
				<div className="btn-group">
					<button>Answered questions</button><button>Unanswered questions</button>
				</div>
				<Card></Card>
			</React.Fragment>
		)


	}
}
