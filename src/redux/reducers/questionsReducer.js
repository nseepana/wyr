
export default (state = {}, { type, payload, pending = true }) => {
	switch (type) {
		case 'GET_QUESTIONS':
			return { ...state, pending, data: { ...state.data, ...payload } }
		case 'ADD_QUESTION':
		case 'UPDATE_QUESTION':
			const { question } = payload;
			return { ...state, pending, data: { ...state.data, [question.id]: question } };
		default:
			return state
	}
}
