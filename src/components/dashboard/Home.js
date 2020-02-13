import React, { Component } from 'react'
import ProfileCard from './ProfileCard';

export default class Home extends Component {
	render() {
		// console.log(this.props);
		return (
			<React.Fragment>
				<div className="btn-group">
					<button>Answered questions</button><button>Unanswered questions</button>
				</div>
				<ProfileCard></ProfileCard>
			</React.Fragment>
		)


	}
}
