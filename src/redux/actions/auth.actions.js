// @ts-nocheck
import { notification } from 'antd';
import { history } from 'helper/history';
import { toast } from 'react-toastify';
import {
	getProfileService,
	loginService,
	registerService,
	update,
	updatePassword,
} from '../../service/auth.service';
import * as types from '../constants';

export const login = (user, onSuccess) => {
	return async (dispatch) => {
		try {
			const response = await loginService(user);
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('refreshToken', response.data.refreshToken);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			dispatch({
				type: types.LOGIN,
				token: response.data.token,
				refreshToken: response.data.refreshToken,
				user: response.data.user,
			});
			onSuccess();
			history.push('/');
		} catch (error) {
			toast.error('Đăng nhập sai email hoặc mật khẩu');
		}
	};
};
export const register = (params, onSuccess) => {
	return async (dispatch) => {
		try {
			const response = await registerService(params);
			if (response.statusCode !== 200) {
				notification.error({
					message: 'Đăng kí thất bại',
					description: response.message,
				});
			} else {
				dispatch({
					type: types.REGISTER,
				});
				onSuccess();
			}
		} catch (error) {
			notification.error({
				message: 'Đăng ký thất bại.',
				description: error?.message || error,
			});
		}
	};
};
export const getProfile = (onSuccess) => {
	return async (dispatch) => {
		try {
			const response = await getProfileService();
			localStorage.setItem('user', JSON.stringify(response.data));
			dispatch({
				type: types.GET_PROFILE,
				user: response?.data,
			});
			onSuccess();
		} catch (error) {
			dispatch({
				type: types.LOGOUT,
			});
		}
	};
};

export const logout = (onSuccess) => {
	return async (dispatch) => {
		dispatch({
			type: types.LOGOUT,
		});
		onSuccess();
		window.location.reload();
	};
};

export const updateUser = (params, onSuccess) => {
	return async (dispatch) => {
		const response = await update(params);
		if (response.statusCode !== 200) {
			notification.error({
				message: 'Sửa thông tin thất bại!',
				description: response.message,
			});
		} else {
			dispatch({
				type: types.UPDATE,
			});
			onSuccess();
		}
	};
};

export const changePassword = (params, onSuccess) => {
	return async (dispatch) => {
		const response = await updatePassword(params);
		if (response.statusCode !== 200) {
			notification.error({
				message: 'Thay đổi mật khẩu thất bại!',
				description: response.message,
			});
		} else {
			dispatch({
				type: types.UPDATE,
			});
			onSuccess();
		}
	};
};
