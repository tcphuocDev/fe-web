// @ts-nocheck
import Button from 'components/Button';
import React from 'react';

const UserInfoDetail = () => {
	return (
		<>
			<div className='user__content__info__top'>
				<h4 className='h4'>Chi tiết tài khoản</h4>
				<Button size='sm'>Chỉnh sửa thông tin</Button>
			</div>
			<div className='user__content__info__form'>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Họ và tên</label>
					<input type='text' placeholder='Trần Công Phước' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Số điện thoại</label>
					<input type='tel' placeholder='0968695197' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Email</label>
					<input type='email' placeholder='ytcongphuoc2409@gmail.com' />
				</div>
				<div className='user__content__info__form__group'>
					<label htmlFor=''>Giới tính</label>
					<input type='text' placeholder='Nam' />
				</div>
			</div>
		</>
	);
};

export default UserInfoDetail;
