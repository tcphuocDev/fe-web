import React from 'react';
import { Link } from 'react-router-dom';

const MenuListUserInfo = () => {
	return (
		<div className='col l-4 m-4 c-12 user__content__menu'>
			<ul className='user__content__menu__list'>
				<li className='user__content__menu__list__item'>
					<Link className='user__content__menu__list__item__link' to='/profile'>
						Chi tiết tài khoản
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to='/profile/my-order'
					>
						Đơn đặt hàng
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to='/profile/edit-password'
					>
						Đổi mật khẩu
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to='/profile/profile-address'
					>
						Đăng xuất
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuListUserInfo;
