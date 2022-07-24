// // @ts-nocheck
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AuthService from '../../service/auth.service';
// import { toast } from 'react-toastify';

// const user = JSON.parse(localStorage.getItem('user'));
// // console.log(user);
// export const login = createAsyncThunk(
// 	'auth/login',
// 	async ({ email, password }, thunkAPI) => {
// 		try {
// 			const data = await AuthService.login(email, password);
// 			return {
// 				user: data,
// 			};
// 		} catch (error) {
// 			console.log(error);
// 			return thunkAPI.rejectWithValue();
// 		}
// 	},
// );
// // let user;
// const initialState = user
// 	? { isLoggedIn: true, user }
// 	: { isLoggedIn: false, user: null };

// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState,
// 	reducers: {},
// 	extraReducers: {
// 		[login.fulfilled]: (state, action) => {
// 			state.isLoggedIn = true;
// 			state.user = action.payload.user;
// 			toast.success('Đăng nhập thành công');
// 		},
// 		[login.rejected]: (state, action) => {
// 			state.isLoggedIn = false;
// 			state.user = null;
// 		},
// 	},
// });

// const { reducer } = authSlice;
// export default reducer;
