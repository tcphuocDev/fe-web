import * as types from '../constants';
let user;
const initialState = {
	token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
	refreshToken:
		typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null,
	user: user
		? { isLoggedIn: true, user: JSON.parse(localStorage.getItem('user')) }
		: { isLoggedIn: false, user: null },
	isOpenModal: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				...state,
				token: action.token,
				refreshToken: action.refreshToken,
				isLoggedIn: true,
				user: action.user,
			};
		case types.REGISTER:
			return {
				...state,
				isLoggedIn: false,
			};
		case types.GET_PROFILE:
			return {
				...state,
				user: action.user,
			};
		case types.UPDATE:
			return {
				...state,
			};
		case types.CHANGE_PASSWORD:
			return {
				...state,
			};
		case types.LOGOUT:
			localStorage.removeItem('user');
			localStorage.removeItem('token');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('cart');
			return {
				token: null,
				refreshToken: null,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;
