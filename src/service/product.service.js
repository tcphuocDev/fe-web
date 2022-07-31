import axios from '../common/axios';

import { APIEnum } from 'constant/api.endpoint';
import { stringify } from 'query-string';

export const list = (query) =>
	axios.get(`${APIEnum.PRODUCT}/list?${stringify(query)}`);
export const detailProduct = (id) => axios.get(`${APIEnum.PRODUCT}/${id}`);
