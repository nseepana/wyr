import React, { Component } from 'react'
import { Link, navigate, Redirect } from '@reach/router'

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

const PollProgress = ({ answered, optionText, percentage = null, votesForOption, totalVotes }) => {

	return (<div className="hint-container">
		{(answered) ? (<div className="hint-item">*</div>) : ""}
		<div>{optionText}</div>
		<progress max='100' min={percentage} value={percentage}>
			<div className="votes-progress-bar">
				<span style={{ width: `${percentage}%` }}>{percentage}%</span>
			</div>
		</progress>
		<div className="vote-info">{`${votesForOption} out of ${totalVotes} vote(s)`}</div>
	</div>)
};

const Results = (props) => {
	const { question: { optionOne = {}, optionTwo = {} } = {}, user = {}, answered } = props;
	const { votes: optionOneVotes = [] } = optionOne;
	const { votes: optionTwoVotes = [] } = optionTwo;
	const votesForOptionOne = optionOneVotes.length || 0;
	const votesForOptionTwo = optionTwoVotes.length || 0;
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
				<div>Would You Rather</div>
				<PollProgress
					answered={answered === 'optionOne'}
					optionText={optionOne.text}
					percentage={optionOnePercentage || 0}
					votesForOption={votesForOptionOne}
					totalVotes={totalVotes} />
				<div>OR</div>
				<PollProgress
					answered={answered === 'optionTwo'}
					optionText={optionTwo.text}
					percentage={optionTwoPercentage || 0}
					votesForOption={votesForOptionTwo}
					totalVotes={totalVotes} />

			</div>
		</div>
	)
}

class ViewQuestion extends Component {

	state = {
		answered: '',
		answeredData: {}
	}

	componentDidMount() {
		this.setState({ answered: this.props.answered });
	}

	notify = (response) => {
		const { user, question } = response;
		const qId = question.id;
		const answered = user.answers[qId];
		this.setState({ answered });
	}


	render() {
		const { answered } = this.state;
		const { question, selectedUserId, pending = true, invalid, answered: updatedAnswer } = this.props;
		if (pending) {
			return 'finding...';
		} else if (invalid) {
			return <Redirect from="/" to="404" noThrow></Redirect>;
		}
		let hasPollResults = answered || updatedAnswer;
		return (
			<div>
				{(!hasPollResults) ?
					(<QuestionCard {...this.props} notify={this.notify}></QuestionCard>)
					:
					(<Results selectedUserId={selectedUserId} question={question} user={this.props.user} answered={answered}></Results>)}
				<Link className="active-link" to='../' state={{ 'answered': !!answered }}> &lt; back</Link>
			</div>
		)
	}
}
export default ViewQuestion;