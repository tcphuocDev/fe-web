import * as types from '../constants';
const initialState = {
	items: [],
	meta: {},
	item: {},
};
const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_CATEGORY:
			return {
				...state,
				items: action.data.items,
				meta: action.data.meta,
			};
		case types.DETAIL_CATEGORY:
			return {
				...state,
				item: action.data,
			};

		default:
			return state;
	}
};

export default categoryReducer;
