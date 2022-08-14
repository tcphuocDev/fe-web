import * as types from '../constants/order.constants';

const initialState = {
	items: [],
	item: {},
	meta: {},
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_ORDER:
			return {
				...state,
				items: action.data.items,
				meta: action.data.meta,
			};
		case types.CHANGE_STATUS_ORDER:
			return state;
		case types.DETAIL_ORDER:
			return {
				...state,
				item: action.data,
			};
		case types.CREATE_ORDER:
			action.onSuccess();
			return {
				...state,
			};
		default:
			return state;
	}
};
export default orderReducer;
