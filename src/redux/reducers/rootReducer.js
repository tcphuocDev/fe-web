import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import modalReducer from './modal.reducer';
import productReducer from './product.reducer';
import colorReducer from './color.reducer';
import sizeReducer from './size.reducer';
import cartReducer from './cart.reducer';
import orderReducer from './order.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	modal: modalReducer,
	product: productReducer,
	category: categoryReducer,
	color: colorReducer,
	size: sizeReducer,
	// cart: cartReducer,
	order: orderReducer,
});

export default rootReducer;
