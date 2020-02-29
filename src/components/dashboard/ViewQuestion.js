import React, { Component } from 'react'
import { Link } from '@reach/router'
import QuestionCard from './QuestionCard';

const PollResults = (props) => {
	const { question: { optionOne = {}, optionTwo = {} } = {}, user = {}, answered } = props;
	let votesForOptionOne = optionOne.votes.length || 0;
	let votesForOptionTwo = optionTwo.votes.length || 0;
	let totalVotes = votesForOptionOne + votesForOptionTwo;
	const optionOnePercentage = (votesForOptionOne / totalVotes) * 100;
	const optionTwoPercentage = (votesForOptionTwo / totalVotes) * 100;

	return (
		<div className="card">
			<div className="card-header">Asked by {user.name}</div>
			<div className="card-profile">
				<img src={user.avatarURL} alt="prof"></img>
			</div>
			<div className="card-details">
				<h3>Results: </h3>

				<div className="hint-container">
					{(answered === "optionOne") ? (<div className="hint-item">*</div>) : ""}
					<p>Would You Rather {optionOne.text}</p>
					<div className="pgb-border">
						<div className="pgb-status" style={{ width: `${optionOnePercentage}%` }} />
					</div>
					<div className="vote-info">{`${votesForOptionOne} out of ${totalVotes} vote(s)`}</div>
				</div>

				<div className="hint-container">
					{(answered === "optionTwo") ? (<div className="hint-item">*</div>) : ""}
					<p>Would You Rather {optionTwo.text}</p>
					<div className="pgb-border">
						<div className="pgb-status" style={{ width: `${optionTwoPercentage}%` }} />
					</div>
					<div className="vote-info">{`${votesForOptionTwo} out of ${totalVotes} vote(s)`}</div>
				</div>


			</div>
		</div>
	)
}

class ViewQuestion extends Component {

	state = {
		questionAnswered: '',
		answeredData: {}
	}

	componentDidMount() {
		this.setState({ questionAnswered: this.props.answered });
	}

	notify = (response) => {
		const { user, question } = response;
		const qId = question.id;
		const questionAnswered = user.answers[qId];
		this.setState({ questionAnswered, answeredData: question });
	}


	render() {
		const { questionAnswered } = this.state;
		const { question, selectedUserId } = this.props;
		return (
			<div>
				{(!questionAnswered) ?
					(<QuestionCard {...this.props} notify={this.notify}></QuestionCard>)
					:
					(<PollResults selectedUserId={selectedUserId} question={question} user={this.props.user} answered={questionAnswered}></PollResults>)}
				<Link className="active-link" to='../' state={{ 'answered': !!questionAnswered }}> &lt; back</Link>
			</div >
		)
	}
}
export default ViewQuestion;