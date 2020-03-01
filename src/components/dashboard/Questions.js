import React, { Component } from 'react'
import { Link } from '@reach/router';


const ShowQuestion = (props) => {
	const { question: { optionOne = {}, id } = {}, user = {} } = props;
	return (<div className="card">
		<div className="card-header">{user.name}</div>
		<div className="card-profile">
			<img src={user.avatarURL} alt="prof"></img>
		</div>
		<div className="card-details">
			<strong>Would You Rather</strong>
			<p>{optionOne.text.substr(0, 20)}...</p>

			<div className="card-details-footer">
				<Link className="active" to={id}>View Poll</Link>
			</div>
		</div>
	</div>)
};

class Questions extends Component {
	state = {
		selectedQuestions: this.props.unansweredQuestions,
		view: 'unanswered'
	}
	componentDidMount() {
		const { location } = this.props;
		if (location.state.answered) {
			this.setState({ view: 'answered' })
		} else {
			this.setState({ view: 'unanswered' })
		}

	}

	static getDerivedStateFromProps(props, state) {
		if (state.view === 'unanswered' && props.unansweredQuestions.length !== state.selectedQuestions.length) {
			return {
				...state,
				selectedQuestions: props.unansweredQuestions,
			}
		} else if (state.view === 'answered' && props.answeredQuestions.length !== state.selectedQuestions.length) {
			return {
				...state,
				selectedQuestions: props.answeredQuestions,
			}
		}
		return null;

	}


	updateState(view) {
		if (view === 'answered') {
			this.setState({ selectedQuestions: this.props.answeredQuestions, view });
		} else {
			this.setState({ selectedQuestions: this.props.unansweredQuestions, view });
		}
	}

	onSelect = (view) => () => {
		this.updateState(view);
	}

	render() {
		const { props = {} } = this;
		const { pending = true } = props;
		if (pending) {
			return <div>loading...</div>
		}
		const { questions = [], users = {} } = props;
		const { selectedQuestions, view } = this.state;
		const unanswered = (view === 'unanswered') ? 'active' : '';
		const answered = (view === 'answered') ? 'active' : '';

		return (
			<React.Fragment>
				<div className="btn-group">
					<button className={unanswered} onClick={this.onSelect('unanswered')}>Unanswered questions</button>
					<button className={answered} onClick={this.onSelect('answered')}>Answered questions</button>
				</div>
				<div className="card-group">
					{!pending && selectedQuestions.length ?
						selectedQuestions.map(({ questionId, answered }) => {
							const question = questions[questionId] || {};
							return <ShowQuestion answered={answered} key={question.id} question={question} user={users[question.author]}></ShowQuestion>
						}) : <p>Answered all questions.</p>}
				</div>
			</React.Fragment>
		)
	}
}

export default Questions;