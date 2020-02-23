
export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'GET_QUESTIONS':
			return { ...state, ...payload }
		default:
			return state
	}
}
