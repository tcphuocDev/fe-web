import { notification } from 'antd';
import { list, detail } from '../../service/category.service';
import * as types from '../constants';

export const listCategory = (query) => {
	return async (dispatch) => {
		try {
			const response = await list(query);
			dispatch({
				type: types.LIST_CATEGORY,
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

export const detailCategory = (id) => {
	return async (dispatch) => {
		try {
			const response = await detail(id);
			dispatch({
				type: types.DETAIL_CATEGORY,
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
