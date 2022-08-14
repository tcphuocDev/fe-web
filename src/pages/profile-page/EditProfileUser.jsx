// @ts-nocheck
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import React, { useEffect, useState } from 'react';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';
import { useDispatch } from 'react-redux';
import { getProfile, updateUser } from 'redux/actions/auth.actions';
import { toast } from 'react-toastify';

const EditProfileUser = () => {
	const [user, setUser] = useState({});
	const [changeInfo, setChangeInfo] = useState(false);
	const [fullname, setFullName] = useState('');
	const [gender, setGender] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, [changeInfo]);
	return (
		<Helmet title='Sửa thông tin'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 user__content__info'>
							<div className='user__content__info__form'>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Họ và tên</label>
									<input
										type='text'
										placeholder=''
										defaultValue={user && user.fullname}
										onChange={(e) => setFullName(e.target.value)}
									/>
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Số điện thoại</label>
									<input
										type='tel'
										placeholder=''
										defaultValue={user && user.phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Email</label>
									<input
										type='email'
										placeholder=''
										defaultValue={user && user.email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Giới tính</label>
									<select
										name='select'
										id=''
										defaultValue={user && user.gender}
										onChange={(e) => {
											setGender(e.target.value);
										}}
									>
										<option value=''>Giới tính</option>
										<option value={0}>Nam</option>
										<option value={1}>Nữ</option>
									</select>
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Địa Chỉ</label>
									<select name='select' id=''>
										{user?.addresses?.map((item) => (
											<>
												<option value={item.address}>{item.address}</option>
											</>
										))}
									</select>
								</div>
							</div>
							<Button
								size='sm'
								onClick={() => {
									dispatch(
										updateUser({ fullname, gender: +gender }, () => {
											dispatch(getProfile(() => setChangeInfo(!changeInfo)));
											toast.success('Cập nhật thông tin người dùng thành công');
										}),
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

export default EditProfileUser;
