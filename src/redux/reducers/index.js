import { combineReducers } from 'redux';

import questions from './questionsReducer';
import { auth } from './authReducer';


export default combineReducers({
	auth,
	questions
})