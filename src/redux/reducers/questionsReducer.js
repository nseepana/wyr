
export default (state = {}, { type, payload }) => {

	switch (type) {
		case 'GET_QUESTIONS':
			return { ...state, ...payload }
		case 'ADD_QUESTION':
		case 'UPDATE_QUESTION':
			const { question } = payload
			return { ...state, [question.id]: question }
		default:
			return state
	}
}
