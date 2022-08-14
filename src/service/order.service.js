import { APIEnum } from 'constant/api.endpoint';
import { stringify } from 'query-string';
import axios from '../common/axios';
export const list = (query) =>
	axios.get(`${APIEnum.ORDER}/list?${stringify(query)}`);
export const changeStatus = (id, data) =>
	axios.put(`${APIEnum.ORDER}/${id}/change-status`, data);
export const detail = (id) => axios.get(`${APIEnum.ORDER}/${id}`);
export const createOrder = (data) =>
	axios.post(`${APIEnum.ORDER}/checkout-public`, data);
