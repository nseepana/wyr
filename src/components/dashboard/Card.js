import React, { Component } from 'react'

export default class Card extends Component {
	render() {
		return (
			<div className="card row">
				<div className="center">user</div>
				<div className="left">
					<img src="" alt="prof"></img>
				</div>
				<div className="right">
					<h3>Would you rather</h3>
					<p></p>
				</div>
			</div>
		)
	}
}
