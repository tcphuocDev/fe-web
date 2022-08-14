import * as types from '../constants';
export const addToCart = (payload, onSuccess) => {
	return async (dispatch) => {
		dispatch({
			type: types.ADD_TO_CART,
			payload,
			onSuccess,
		});
	};
};
export const updateCart = (payload, onSuccess) => {
	return async (dispatch) => {
		dispatch({
			type: types.CHANGE_QUANTITY,
			payload,
			onSuccess,
		});
	};
};
export const deleteItem = (payload, onSuccess) => {
	return async (dispatch) => {
		dispatch({
			type: types.REMOVE_ITEM,
			payload,
			onSuccess,
		});
	};
};
