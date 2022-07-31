import * as types from '../constants';
import { list, detail } from '../../service/color.service';
import { notification } from 'antd';
export const listColor = (query) => {
	return async (dispatch) => {
		try {
			const response = await list(query);
			dispatch({
				type: types.LIST_COLOR,
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

export const detailColor = (id) => {
	return async (dispatch) => {
		try {
			const response = await detail(id);
			dispatch({
				type: types.DETAIL_COLOR,
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
