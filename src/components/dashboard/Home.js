import React, { Component } from 'react'
import ProfileCard from './ProfileCard';

class Home extends Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}
	render() {
		// console.log(this.props);
		const { questions = [], users = {} } = this.props;
		console.clear();
		// console.log(users);
		return (
			<React.Fragment>
				<div className="btn-group">
					<button>Answered questions</button><button>Unanswered questions</button>
				</div>
				{questions.map(question => <ProfileCard key={question.id} question={question} user={users[question.author]}></ProfileCard>)}
			</React.Fragment>
		)


	}
}


export default Home;