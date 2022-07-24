import { type } from '@testing-library/user-event/dist/type';
import * as types from '../constants';
const initialState = {
	value: null,
	isOpenModal: false,
};
const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN:
			return {
				...state,
				value: action.payload,
				isOpenModal: true,
			};
		case types.CLOSE:
			return {
				...state,
				value: null,
				isOpenModal: false,
			};
		default:
			return state;
	}
};
export default modalReducer;
