// @ts-nocheck
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const initialState = {
	userSignin: {
		userInfo: localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: null,
	},
	cart: {
		cartItems: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
		shippingAddress: localStorage.getItem('shippingAddress')
			? JSON.parse(localStorage.getItem('shippingAddress'))
			: {},
		paymentMethod: 'PayPal',
	},
};
const reducer = combineReducers({});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk)),
);
export default store;
