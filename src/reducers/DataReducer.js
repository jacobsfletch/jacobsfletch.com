const defaultState = {
	portfolio: [],
	blog: [],
	globals: [],
	resume: []
}

export default (state = defaultState, action) => {

	switch (action.type) {

		case 'LOAD_PORTFOLIO':
			return {
				...state,
				portfolio: action.payload
			}

		case 'LOAD_BLOG':
			return {
				...state,
				blog: action.payload
			}

		case 'LOAD_GLOBALS':
			return {
				...state,
				globals: action.payload
			}

		case 'LOAD_RESUME':
			return {
				...state,
				resume: action.payload
			}

		default:
			return state

	}
}