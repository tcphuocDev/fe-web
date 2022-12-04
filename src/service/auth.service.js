import { APIEnum } from 'constant/api.endpoint';
import axios from '../common/axios';

export const loginService = (data) => axios.post(APIEnum.LOGIN, data);
export const registerService = (data) => axios.post(APIEnum.REGISTER, data);
export const getProfileService = () => axios.get(APIEnum.PROFILE);
export const update = (data) => axios.put('/auth/update', data);
export const getTokenService = (data) => axios.post(APIEnum.GET_TOKEN, data);
export const updatePassword = (data) =>
	axios.put(APIEnum.CHANGE_PASSWORD, data);
export const updateUserService = (data) => axios.put(APIEnum.UPDATE_USER, data);
