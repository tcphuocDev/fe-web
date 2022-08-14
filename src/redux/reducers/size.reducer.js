import * as types from '../constants';
const initialState = {
	items: [],
	meta: {},
	item: {},
};
const sizeReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_SIZE:
			return {
				...state,
				items: action.data.items,
				meta: action.data.meta,
			};
		case types.DETAIL_SIZE:
			return {
				...state,
				item: action.data,
			};
		default:
			return state;
	}
};
export default sizeReducer;
