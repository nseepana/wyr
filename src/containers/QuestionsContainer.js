import { connect } from 'react-redux'
import { fetchQuestions } from '../redux/actionCreators/userActionThunk'
import Questions from '../components/dashboard/Questions'


const mapStateToProps = ({ questions = {}, auth } = {}) => {
	const user = auth.selectedUser || {};
	const answeredQuestions = [];
	const unansweredQuestions = [];
	const questionIds = Object.keys(questions) || [];
	for (let questionId of questionIds) {
		let answered = user.answers[questionId];
		const pollInfo = { questionId, answered };

		if (answered) {
			answeredQuestions.push(pollInfo);
		} else {
			unansweredQuestions.push(pollInfo);
		}
	}
	return {
		...auth,
		questions,
		answeredQuestions,
		unansweredQuestions
	}
};

export default connect(mapStateToProps, { fetchQuestions })(Questions)
