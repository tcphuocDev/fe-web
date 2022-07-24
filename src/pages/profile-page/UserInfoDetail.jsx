// @ts-nocheck
import Button from 'components/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserInfoDetail = (props) => {
	const { changeInfo, setChangeInfo } = props;
	const [user, setUser] = useState({});
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, [changeInfo]);
	return (
		<>
			<div className='user__content__info__top'>
				<h4 className='h4'>Chi tiết tài khoản</h4>
				<Link to={`/edit/profile`}>
					<Button size='sm'>Chỉnh sửa thông tin</Button>
				</Link>
			</div>
			<div className='user__content__info__form'>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Họ và tên</label>
					<input type='text' placeholder='' defaultValue={user.fullname} />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Số điện thoại</label>
					<input type='tel' placeholder='' defaultValue={user.phone} />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Email</label>
					<input type='email' placeholder='' defaultValue={user.email} />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Giới tính</label>
					<select name='select' id='' defaultValue={user && user.gender}>
						<option value='' disabled>
							Giới tính
						</option>
						<option value={0}>Nam</option>
						<option value={1}>Nữ</option>
					</select>
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Địa chỉ</label>
					<input type='text' placeholder='' defaultValue={user.address} />
				</div>
			</div>
		</>
	);
};

export default UserInfoDetail;
