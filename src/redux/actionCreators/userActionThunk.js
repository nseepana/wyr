import { getUsers } from '../../utils/api';

export const fetchUsers = () => next => {
	return getUsers().then(users => {
		// console.log(users);
		next({
			type: 'GET_USERS',
			payload: {
				users
			}
		})
	})
}

export const selectedUser = (userId) => ({
	type: 'USER_SELECTED',
	userId
})
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