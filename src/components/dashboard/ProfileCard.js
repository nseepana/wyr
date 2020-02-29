import React, { Component } from 'react'
import { Link } from '@reach/router';
export default class ProfileCard extends Component {

	render() {
		const { question: { optionOne = {}, id } = {}, user = {} } = this.props;

		return (
			<div className="card">
				<div className="card-header">{user.name}</div>
				<div className="card-profile">
					<img src={user.avatarURL} alt="prof"></img>
				</div>
				<div className="card-details">
					<h3>Would You Rather</h3>
					<p>...{optionOne.text.substr(0, 15)}...</p>

					<div className="card-details-footer">
						<Link className="active" to={id}>View Poll</Link>
					</div>
				</div>
			</div>
		)
	}
}