// @ts-nocheck
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import React from 'react';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';

const ChangePassword = () => {
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
									<input type='text' placeholder='Nhập mật khẩu cũ...' />
								</div>
								<div className='user__content__info__form__group'>
									<label htmlFor=''>Mật khẩu mới</label>
									<input type='tel' placeholder='Nhập mật khẩu mới' />
								</div>
							</div>
							<Button size='sm'>Lưu</Button>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default ChangePassword;
