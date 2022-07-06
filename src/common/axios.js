import Axios from 'axios';
import { APIEnum } from 'constant/api.endpoint';
import { BASE_URL } from 'constant/config';
import { getTokenService } from '../service/auth.service';
import setAuthToken from './setAuthToken';

const instance = Axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem('token');
		if (config.url !== APIEnum.GET_TOKEN && token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	function (response) {
		if (response && response?.data) return response.data;
	},
	async function (error) {
		const { config } = error;

		const urlIgnore = [APIEnum.LOGIN, APIEnum.REGISTER, APIEnum.GET_TOKEN];

		const refreshToken = localStorage.getItem('refreshToken');

		if (
			error?.response?.status === 401 &&
			refreshToken &&
			!urlIgnore.includes(config.url) &&
			(config.retry || 0) < 4
		) {
			config.retry = config.retry ? config.retry + 1 : 1;
			const response = await getTokenService({ refreshToken });

			const { token } = response.data;

			if (token) {
				setAuthToken(token);

				window.localStorage.setItem('token', token);

				return instance(config);
			}
		}
		return Promise.reject(error);
	},
);

export default instance;
