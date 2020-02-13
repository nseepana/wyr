import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import ScoreCard from './ScoreCard'

export default class LeadBoard extends Component {
	render() {
		return (
			<ul>
				<li>
					<ProfileCard></ProfileCard>
					<ScoreCard></ScoreCard>
				</li>
			</ul>

		)
	}
}
