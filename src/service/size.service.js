import axios from '../common/axios';
import { stringify } from 'query-string';
import { APIEnum } from 'constant/api.endpoint';

export const list = (query) =>
	axios.get(`${APIEnum.SIZE}/list?${stringify(query)}`);
export const detail = (id) => axios.get(`${APIEnum.SIZE}/${id}`);
