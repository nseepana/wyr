import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion, _getQuestion } from './_DATA';

export const getUsers = async () => {
	return await _getUsers();
}

export const getUser = async (id) => {
	let users = await _getUsers();
	return users[id];
}

export const getQuestions = async () => {
	return await _getQuestions();
}

export const saveQuestion = async (question) => {
	return await _saveQuestion(question);
}

export const getQuestion = async (qid) => {
	return await _getQuestion(qid);
}


export const saveQuestionAnswer = async (data) => {
	let response = await _saveQuestionAnswer(data);
	return response;
}
