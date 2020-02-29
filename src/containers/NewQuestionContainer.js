import { connect } from 'react-redux'
import { addQuestion } from '../redux/actionCreators/userActionThunk'
import NewQuestions from '../components/dashboard/NewQuestions'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({ auth: { userId } }) => ({ userId });

const mapDispatchToProps = (dispatch) => {
	return { addQuestion: bindActionCreators(addQuestion, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestions);
