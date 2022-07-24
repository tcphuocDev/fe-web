import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { logout } from '../../redux/actions/auth.actions';

const MenuListUserInfo = (props) => {
	const { changeInfo, setChangeInfo } = props;
	const [user, setUser] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		setUser(JSON.parse(localStorage?.getItem('user')));
	}, [changeInfo]);

	const handleLoginLogout = () => {
		dispatch(
			logout(() => {
				history.push('/');
			}),
		);
	};

	return (
		<div className='col l-4 m-4 c-12 user__content__menu'>
			<ul className='user__content__menu__list'>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to={`/profile`}
					>
						Chi tiết tài khoản
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to={`/my-order/profile`}
					>
						Đơn đặt hàng
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to={`/edit-password/profile`}
					>
						Đổi mật khẩu
					</Link>
				</li>
				<li className='user__content__menu__list__item'>
					<Link
						className='user__content__menu__list__item__link'
						to=''
						onClick={handleLoginLogout}
					>
						Đăng xuất
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuListUserInfo;
