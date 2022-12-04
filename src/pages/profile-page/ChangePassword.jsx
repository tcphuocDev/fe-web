import Button from 'components/Button';
import Helmet from 'components/Helmet';
import { BASE_URL } from 'constant/config';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword, getProfile } from 'redux/actions/auth.actions';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';

const ChangePassword = () => {
	const MODE = {
		OLD_PASSWORD: 'OLD_PASSWORD',
		NEW_PASSWORD: 'NEW_PASSWORD',
	};
	const [changeInfo, setChangeInfo] = useState(false);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [isShowPasswordOld, setIsShowPasswordOld] = useState(false);
	const [mode, setMode] = useState('');
	const resetForm = () => {
		setOldPassword('');
		setNewPassword('');
	};
	const dispatch = useDispatch();

	const validateForm = () => {
		let isFail = {
			isOldPassword: false,
			isNewPassword: false,
		};
		if (oldPassword.trim().length === 0) {
			isFail = {
				...isFail,
				isOldPassword: true,
			};
		}
		if (newPassword.trim().length === 0) {
			isFail = {
				...isFail,
				isNewPassword: true,
			};
		}
		if (isFail.isNewPassword || isFail.isOldPassword) {
			toast.error('Vui lòng nhập đủ thông tin');
			return;
		}
	};
	return (
		<Helmet title='Đổi mật khẩu'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content user__content__password'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 user__content__info'>
							<div className='user__content__info__top'>
								<h4>Đổi mật khẩu</h4>
							</div>
							<div className='user__content__info__form'>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Mật khẩu cũ</label>
									<input
										type={isShowPasswordOld ? 'text' : 'password'}
										placeholder='Nhập mật khẩu cũ...'
										value={oldPassword}
										onChange={(e) => setOldPassword(e.target.value)}
										onBlur={validateForm}
									/>
									<span
										className='user__content__info__form__group--show'
										onClick={() => setIsShowPasswordOld(!isShowPasswordOld)}
									>
										<i
											className={
												isShowPasswordOld ? 'bx bx-show' : 'bx bx-low-vision'
											}
										></i>
									</span>
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Mật khẩu mới</label>
									<input
										type={isShowPassword ? 'text' : 'password'}
										placeholder='Nhập mật khẩu mới'
										value={newPassword}
										onChange={(e) => setNewPassword(e.target.value)}
										onBlur={validateForm}
									/>
									<span
										className='user__content__info__form__group--show'
										onClick={() => setIsShowPassword(!isShowPassword)}
									>
										<i
											className={
												isShowPassword ? 'bx bx-show' : 'bx bx-low-vision'
											}
										></i>
									</span>
								</div>
							</div>
							<Button
								size='sm'
								onClick={() => {
									dispatch(
										changePassword(
											{
												oldPassword,
												newPassword,
											},
											() => {
												dispatch(getProfile(() => setChangeInfo(!changeInfo)));
												resetForm();
												toast.success('Thay đổi mật khẩu thành công');
											},
										),
									);
								}}
							>
								Lưu
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default ChangePassword;
