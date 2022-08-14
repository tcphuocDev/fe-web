import * as types from '../constants';

const initialState = {
	cartItems:
		localStorage.getItem('CART') !== null
			? JSON.parse(localStorage.getItem('CART'))
			: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TO_CART: {
			const newItem = action.payload;
			let cartItem = !JSON.parse(localStorage.getItem('CART'))
				? []
				: JSON.parse(localStorage.getItem('CART'));
			const index = cartItem.findIndex((x) => x.id === newItem.id);
			if (index >= 0) {
				cartItem[index].quantity += newItem.quantity;
			} else {
				cartItem.push(newItem);
			}
			localStorage.setItem('CART', JSON.stringify(cartItem));
			action.onSuccess();
			return { ...state };
		}
		case types.CHANGE_QUANTITY: {
			const { id, quantity } = action.payload;
			let cartItem = !JSON.parse(localStorage.getItem('CART'))
				? []
				: JSON.parse(localStorage.getItem('CART'));
			const index = cartItem.findIndex((x) => x.id === id);
			if (index >= 0) {
				cartItem[index].quantity = quantity;
			}
			localStorage.setItem('CART', JSON.stringify(cartItem));
			action.onSuccess();
			return { ...state };
		}
		case types.REMOVE_ITEM: {
			const id = action.payload;
			let cartItem = !JSON.parse(localStorage.getItem('CART'))
				? []
				: JSON.parse(localStorage.getItem('CART'));
			const items = cartItem.filter((item) => item.id !== id);
			cartItem = items;
			localStorage.setItem('CART', JSON.stringify(cartItem));
			action.onSuccess();
			return { ...state };
		}
		default:
			return state;
	}
};
export default cartReducer;
