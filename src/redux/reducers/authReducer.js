const initialState = {

}

export const auth = (state = initialState, { type, payload }) => {
	console.log(state, type, payload);
	switch (type) {
		case 'USER_SELECTED':
			return { ...state, ...payload }
		case 'GET_USERS':
			return { ...state, ...payload }
		default:
			return state
	}
}
