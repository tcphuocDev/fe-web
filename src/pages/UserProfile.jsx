// @ts-nocheck
import Helmet from 'components/Helmet';
import React from 'react';
import BannerUserPage from './profile-page/BannerUserPage';
import MenuListUserInfo from './profile-page/MenuListUserInfo';
import UserInfoDetail from './profile-page/UserInfoDetail';

const UserProfile = () => {
	return (
		<Helmet title='Thông tin người dùng'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 user__content__info'>
							<UserInfoDetail />
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default UserProfile;
