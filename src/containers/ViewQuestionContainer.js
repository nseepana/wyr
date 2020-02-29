import { connect } from 'react-redux'
import ViewPoll from '../components/dashboard/ViewQuestion'
import { updateQuestion } from '../redux/actionCreators/userActionThunk'
import { bindActionCreators } from 'redux';
import { getQuestion } from '../utils/api';

const mapStateToProps = (state, ownProps) => {
	const question = state.questions[ownProps.questionId] || {};
	const selectedUser = state.auth.selectedUser || {};
	let selectedUserId = selectedUser.id;
	let answered = selectedUser.answers[ownProps.questionId];
	return {
		question,
		answered,
		selectedUserId,
		user: state.auth.users[question.author]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateQuestion: bindActionCreators(updateQuestion, dispatch),
		getUpdatedQuestion: getQuestion
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll)
