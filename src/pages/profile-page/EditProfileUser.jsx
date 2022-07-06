// @ts-nocheck
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import React from 'react';
import BannerUserPage from './BannerUserPage';
import MenuListUserInfo from './MenuListUserInfo';
import UserInfoDetail from './UserInfoDetail';

const EditProfileUser = () => {
	return (
		<Helmet title='Sửa thông tin'>
			<div className='user'>
				<BannerUserPage />
				<div className='user__content'>
					<div className='row'>
						<MenuListUserInfo />
						<div className='col l-8 m-8 c-12 user__content__info'>
							<UserInfoDetail />
							<Button size='sm'>Lưu</Button>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default EditProfileUser;
