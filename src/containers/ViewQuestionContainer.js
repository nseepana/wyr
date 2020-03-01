import { connect } from 'react-redux'
import ViewPoll from '../components/dashboard/ViewQuestion'
import { updateQuestion } from '../redux/actionCreators/actionThunks'
import { bindActionCreators } from 'redux';
import { getQuestion } from '../utils/api';

const mapStateToProps = ({ questions: { data = {}, pending = true }, auth } = {}, ownProps) => {
	if (pending) {
		return { pending };
	}
	const question = data[ownProps.questionId];
	// console.log(question)
	if (!question) {
		return { pending, invalid: true };
	}
	const selectedUser = auth.selectedUser || {};
	let selectedUserId = selectedUser.id;
	let answered = selectedUser.answers[ownProps.questionId];
	// console.log(answered);
	return {
		question,
		answered,
		pending,
		selectedUserId,
		user: auth.users[question.author]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateQuestion: bindActionCreators(updateQuestion, dispatch),
		getUpdatedQuestion: getQuestion
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll)
