const initialState = {

}

export const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'LOGGED_IN':
			return { ...state, ...payload }
		case 'GET_USERS':
			return { ...state, ...payload }
		default:
			return state
	}
}
