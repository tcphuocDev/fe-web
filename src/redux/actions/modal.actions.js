import * as types from '../constants';

export const showModal = (payload) => {
	return {
		type: types.OPEN,
		payload: payload,
	};
};
export const closeModal = () => {
	return {
		type: types.CLOSE,
	};
};
