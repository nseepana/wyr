import React, { Component } from 'react'

export default class ScoreCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-profile">
					<img src="" alt="prof"></img>
				</div>
				<div className="card-details">
					<div className="card-header">user</div>
					<div>Answered Questions 5</div>
					<hr></hr>
					<div>Created Questions 3</div>
					<p>Score</p>
					<p>100</p>
				</div>

			</div>
		)
	}
}
