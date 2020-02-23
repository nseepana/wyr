import { getUsers, getQuestions } from '../../utils/api';

export const fetchUsers = () => next => {
	return getUsers().then(users => {
		next({
			type: 'GET_USERS',
			payload: {
				...users
			}
		})
	})
}

export const fetchQuestions = () => next => {
	return getQuestions().then(questions => {
		next({
			type: 'GET_QUESTIONS',
			payload: {
				...questions
			}
		})
	})
}

export const onUserSelect = (user = {}) => ({
	type: 'USER_SELECTED',
	payload: {
		selectedUser: user,
		userId: user.id,
		hasUserId: !!user.id
	}
})

export const onLogout = {
	type: 'USER_LOGOUT',
	payload: {
		selectedUser: null,
		userId: null,
		hasUserId: null
	}
}

// export const fetchUsers = () => {
// 	return dispatch => {
// 		getUsers().then(users => {
// 			dispatch({
// 				type: 'GET_USERS',
// 				users
// 			})
// 		})
// 	}
// }