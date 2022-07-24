import axios from 'axios';
import { BASE_URL } from 'constant/config';

export const getAllItems = () => {
	return axios.get(`${BASE_URL}/products/list`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
