import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from './_DATA';

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

export const saveQuestion = async () => {
	return await _saveQuestion();
}

export const saveQuestionAnswer = async () => {
	return await _saveQuestionAnswer();
}
