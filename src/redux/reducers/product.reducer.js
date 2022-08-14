import * as types from '../constants';
const initialState = {
	items: [],
	meta: {},
	item: {},
};
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_PRODUCT:
			return {
				...state,
				items: action.data.items,
				meta: action.data.meta,
			};
		case types.DETAIL_PRODUCT:
			return {
				...state,
				item: action.data,
			};

		default:
			return state;
	}
};

export default productReducer;
