import React, { Component } from 'react'
import { Link } from '@reach/router'

const QuestionCard = (props) => {
	// const [answer, setAnswered] = useState("");
	let answer = ""
	const handleSubmit = (e) => {
		e.preventDefault();
		let { question, selectedUserId } = props;
		if (selectedUserId) {
			props.updateQuestion({
				answer: answer,
				authedUser: selectedUserId,
				qid: question.id
			}).then((response) => {
				props.notify(response);
			})
		}
	}
	const handleChange = (event) => {
		answer = event.target.value;
	}
	const { question: { optionOne = {}, optionTwo = {} } = {}, user = {} } = props;
	return (
		<div className="card">
			<div className="card-header">{user.name}</div>
			<div className="card-profile">
				<img src={user.avatarURL} alt="prof"></img>
			</div>
			<div className="card-details">
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend><span>Would You Rather</span></legend>
						<div className="field-radiobutton">
							<input type="radio" onChange={handleChange} value="optionOne" name="option" id="optionOne" />
							<label htmlFor="optionOne">{optionOne.text}</label>
						</div>
						<div className="field-radiobutton">
							<input type="radio" onChange={handleChange} value="optionTwo" name="option" id="optionTwo" />
							<label htmlFor="optionTwo">{optionTwo.text}</label>
						</div>
					</fieldset>
					<div className="card-details-footer">
						<button type="submit" className="active">Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

const PollResults = (props) => {
	const { question: { optionOne = {}, optionTwo = {} } = {}, user = {}, answered } = props;
	const votesForOptionOne = optionOne.votes.length || 0;
	const votesForOptionTwo = optionTwo.votes.length || 0;
	const totalVotes = votesForOptionOne + votesForOptionTwo;
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
			</div>
		)
	}
}
export default ViewQuestion;