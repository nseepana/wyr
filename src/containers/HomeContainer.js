import { connect } from 'react-redux'
import { fetchQuestions } from '../redux/actionCreators/userActionThunk'
import Home from '../components/dashboard/Home'


const mapStateToProps = ({ questions, auth }) => {

	return {
		users: auth,
		questions: Object.values(questions)
	};
};



export default connect(mapStateToProps, { fetchQuestions })(Home)
