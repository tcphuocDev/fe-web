import { createOrder, detail, list } from 'service/order.service';
import { notification } from 'antd';
import * as types from '../constants';

export const listOrder = (query) => {
	return async (dispatch) => {
		try {
			const response = await list(query);
			dispatch({
				type: types.LIST_ORDER,
				data: response?.data,
			});
		} catch (error) {
			console.log(error?.message || error);
			notification.open({
				message: 'Thất bại',
				description: error?.message || error,
			});
		}
	};
};

export const detailOrders = (id) => {
	return async (dispatch) => {
		try {
			const response = await detail(id);
			console.log(response);
			dispatch({
				type: types.DETAIL_ORDER,
				data: response.data,
			});
		} catch (error) {
			console.log(error?.message || error);
			notification.open({
				message: 'Thất bại',
				description: error?.message || error,
			});
		}
	};
};
export const createOrders = (data, onSuccess) => {
	return async (dispatch) => {
		const response = await createOrder(data);
		onSuccess();
	};
};
