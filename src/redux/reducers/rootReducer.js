import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import modalReducer from './modal.reducer';
// import orderReducer from "./order.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	// order: orderReducer,
	modal: modalReducer,
});

export default rootReducer;
