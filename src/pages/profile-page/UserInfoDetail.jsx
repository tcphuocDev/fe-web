// @ts-nocheck
import Button from 'components/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const UserInfoDetail = () => {
	return (
		<>
			<div className='user__content__info__top'>
				<h4 className='h4'>Chi tiết tài khoản</h4>
				<Link to='profile/edit'>
					<Button size='sm'>Chỉnh sửa thông tin</Button>
				</Link>
			</div>
			<div className='user__content__info__form'>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Họ và tên</label>
					<input type='text' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Số điện thoại</label>
					<input type='tel' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Email</label>
					<input type='email' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Giới tính</label>
					<input type='text' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Thành phố</label>
					<input type='text' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Quận Huyện</label>
					<input type='text' placeholder='' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Địa chỉ</label>
					<input type='text' placeholder='' />
				</div>
			</div>
		</>
	);
};

export default UserInfoDetail;
