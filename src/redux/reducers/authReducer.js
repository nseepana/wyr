const initialState = {}

export const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'USER_SELECTED':
			return { ...state, ...payload }
		case 'GET_USERS':
			return {
				...state,
				users: payload
			}
		case 'ADD_QUESTION':
			const { question } = payload;
			if (state.selectedUser.id === question.author) {
				state.selectedUser.questions.push(question.id)
			}
			state.users[question.author].questions.push(question.id);
			return state;
		case 'UPDATE_QUESTION':
			const { user } = payload
			if (state.selectedUser.id === user.id) {
				state.selectedUser = user;
			}
			state.users[user.id] = user;
			return state;

		default:
			return state
	}
}
