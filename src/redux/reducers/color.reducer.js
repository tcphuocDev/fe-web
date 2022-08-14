import * as types from '../constants';
const initialState = {
	items: [],
	meta: {},
	item: {},
};
const colorReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_COLOR:
			return {
				...state,
				items: action.data.items,
			};
		case types.DETAIL_COLOR:
			return {
				...state,
				item: action.data,
			};
		default:
			return state;
	}
};
export default colorReducer;
