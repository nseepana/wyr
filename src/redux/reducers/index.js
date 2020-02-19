import { combineReducers } from 'redux';

// import { questionReducer } from './questionReducer';
import { auth } from './authReducer';


export default combineReducers({
	auth
})