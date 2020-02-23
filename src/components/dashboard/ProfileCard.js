import React, { Component } from 'react'


export default class ProfileCard extends Component {


	render() {
		const { question, user = {} } = this.props;
		console.log(this.props);
		return (
			<div className="card">
				<div className="card-header">{user.name}</div>
				<div className="card-profile">
					<img src={user.avatarURL} alt="prof"></img>
				</div>
				<div className="card-details">
					<div>Would you rather</div>
					<p>{question.optionOne.text}</p>
					<p>{question.optionTwo.text}</p>
				</div>
			</div>
		)
	}
}