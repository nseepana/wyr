import { connect } from 'react-redux';
import LeadBoard from '../components/dashboard/LeadBoard';

const mapStateToProps = ({ auth }) => {
	const { users } = auth;
	const userIds = Object.keys(users);
	let leaderBoard = {};
	let scoreBoard = [];
	for (let userId of userIds) {
		const user = users[userId];
		const answered = Object.keys(user.answers).length;
		const questioned = user.questions.length;
		const scored = answered + questioned;
		scoreBoard.push(scored + userId);
		leaderBoard[scored + userId] = { ...user, answered, questioned, scored };
	}
	scoreBoard = scoreBoard.sort().reverse();
	return { scoreBoard, leaderBoard };

};



export default connect(mapStateToProps)(LeadBoard)
