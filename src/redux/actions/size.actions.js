import { notification } from 'antd';
import { detail, list } from 'service/size.service';
import * as types from '../constants';

export const listSize = (query) => {
	return async (dispatch) => {
		try {
			const response = await list(query);
			dispatch({
				type: types.LIST_SIZE,
				data: response.data,
			});
		} catch (error) {
			notification.open({
				message: 'Thất bại',
				description: error?.message || error,
			});
		}
	};
};

export const detailSize = (id) => {
	return async (dispatch) => {
		try {
			const response = await detail(id);
			dispatch({
				type: types.DETAIL_SIZE,
				data: response.data,
			});
		} catch (error) {
			notification.open({
				message: 'Thất bại',
				description: error?.message || error,
			});
		}
	};
};
