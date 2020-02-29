import React, { Component } from 'react'
// import ProfileCard from './ProfileCard'
// import ScoreCard from './ScoreCard'

class LeadBoard extends Component {
	render() {
		const { leaderBoard, scoreBoard } = this.props;

		return (
			<ul>
				{scoreBoard.map(score => {
					const user = leaderBoard[score];
					const { answered, questioned, scored } = user;
					return (<li key={user.id}>
						<div className="card">
							<div className="card-header">{user.name}</div>
							<div className="card-profile">
								<img src={user.avatarURL} alt="prof"></img>
							</div>
							<div className="card-details">
								<p>Answered Questions: <strong>{answered}</strong></p>
								<p>Created Questions: <strong>{questioned}</strong></p>
								<p>Score: <strong>{scored}</strong></p>
							</div>

						</div>
					</li>)
				})}
			</ul>

		)
	}
}
export default LeadBoard;