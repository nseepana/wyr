import { getUsers, getQuestions, saveQuestion, saveQuestionAnswer } from '../../utils/api';

const wrapAction = (type, payload) => ({
	type,
	payload,
	pending: false
})


export const fetchUsers = () => next => (getUsers().then(users => next(wrapAction('GET_USERS', { ...users }))))
export const fetchQuestions = () => next => getQuestions().then(questions => next(wrapAction('GET_QUESTIONS', { ...questions })));
export const addQuestion = (question) => next => (saveQuestion(question).then(data => next(wrapAction('ADD_QUESTION', { question: data }))));

export const updateQuestion = (data) => (next) => saveQuestionAnswer(data).then((response) => {
	next(wrapAction('UPDATE_QUESTION', response))
	return response;
});





export const onUserSelect = (user = {}) => wrapAction('USER_SELECTED', {
	selectedUser: user,
	userId: user.id,
	hasUserId: !!user.id
});

export const onLogout = wrapAction('USER_LOGOUT', {
	selectedUser: null,
	userId: null,
	hasUserId: null,
	pending: false
})


export const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('action: ', action);
	const result = next(action);
	console.log('new state: ', store.getState());
	console.groupEnd();
	return result;
}