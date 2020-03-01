import { connect } from 'react-redux'
import { fetchQuestions } from '../redux/actionCreators/actionThunks'
import Questions from '../components/dashboard/Questions'


const mapStateToProps = ({ questions: { data = {}, pending }, auth } = {}) => {
	const user = auth.selectedUser || {};
	let answeredQuestions = [];
	let unansweredQuestions = [];
	const questionIds = Object.keys(data) || [];
	for (let questionId of questionIds) {
		let answered = user.answers[questionId];
		const pollInfo = { questionId, answered, timestamp: data[questionId].timestamp };
		if (answered) {
			answeredQuestions.push(pollInfo);
		} else {
			unansweredQuestions.push(pollInfo);
		}
	}
	answeredQuestions.sort((a, b) => {
		if (a.timestamp > b.timestamp) return -1;
		if (a.timestamp < b.timestamp) return 1;
		return 0;
	});

	unansweredQuestions.sort((a, b) => {
		if (a.timestamp > b.timestamp) return -1;
		if (a.timestamp < b.timestamp) return 1;
		return 0;
	});

	return {
		...auth,
		questions: data,
		pending,
		answeredQuestions,
		unansweredQuestions
	}
};

export default connect(mapStateToProps, { fetchQuestions })(Questions)
