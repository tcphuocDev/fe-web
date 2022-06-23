// @ts-nocheck
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import UserProfile from 'pages/UserProfile';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';

const AddressUser = () => {
	return (
		<Helmet title='Thông tin người dùng - Địa chỉ'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 user__content__address'>
							<div className='row'>
								<div className='col l-5 m-5 c-12 user__content__address__item'>
									<div className='user__content__address__item__title'>
										<h4>Địa chỉ giao hàng</h4>
									</div>
									<div className='user__content__address__item__info'>
										<h4>Trần Công Phước</h4>
										<p>Chung cư Thái Hà, Cổ Nhuế 2 , Băc Từ Liêm , Hà Nội</p>
										<p>Số điện thoại : 0968695197</p>
										<Button size='sm'>Sửa thông tin địa chỉ</Button>
									</div>
								</div>
								<div className='col l-5 m-5 c-12 user__content__address__item'>
									<div className='user__content__address__item__title'>
										<h4>Địa chỉ giao hàng</h4>
									</div>
									<div className='user__content__address__item__info'>
										<h4>Trần Công Phước</h4>
										<p>Chung cư Thái Hà, Cổ Nhuế 2 , Băc Từ Liêm , Hà Nội</p>
										<p>Số điện thoại : 0968695197</p>
										<Button size='sm'>Sửa thông tin địa chỉ</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default AddressUser;
