import React, { useRef, useEffect, useState } from 'react';
import mainNav from 'assets/fake-data/mainNav';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo-2.png';
import { isEmpty } from 'lodash';

const Header = (props) => {
	const { pathname } = useLocation();
	const { change, changeCart, changeInfo, setFilters, filters } = props;
	// const cartItems = useSelector((state) => state.cartItems.value);
	const [changeUser, setChangeUser] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [totalProducts, setTotalProducts] = useState(0);
	const activeNav = mainNav.findIndex((e) => e.path === pathname);
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		setCurrentUser(JSON.parse(localStorage?.getItem('user')));
	}, [changeUser]);
	const headerRef = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		});
		return () => {
			window.removeEventListener('scroll', null);
		};
	}, []);

	// useEffect(() => {
	// 	setTotalProducts(
	// 		cartItems?.reduce((total, item) => total + Number(item?.quantity), 0),
	// 	);
	// }, [cartItems]);

	const menuLeft = useRef(null);

	const menuToggle = () => menuLeft.current.classList.toggle('active');
	return (
		<div className='header' ref={headerRef}>
			<div className='container'>
				<div className='header__logo'>
					<Link to='/'>
						<img src={logo} alt='' />
					</Link>
				</div>
				<div className='header__menu'>
					<div className='header__menu__mobile-toggle' onClick={menuToggle}>
						<i className='bx bx-menu-alt-left'></i>
					</div>
					<div className='header__menu__left' ref={menuLeft}>
						<div className='header__menu__left__close' onClick={menuToggle}>
							<i className='bx bx-chevron-left'></i>
						</div>
						{mainNav.map((item, index) => (
							<div
								key={index}
								className={`header__menu__item header__menu__left__item ${
									index === activeNav ? 'active' : ''
								}`}
								onClick={menuToggle}
							>
								<Link to={item.path}>
									<span>{item.display}</span>
								</Link>
							</div>
						))}
					</div>
					<div className='header__menu__right'>
						<div className='header__menu__item header__menu__right__item'>
							<div className='header__menu__right__item__search'>
								<input type='text' placeholder='T??m ki???m ??? ????y...' />
								<i className='bx bx-search'></i>
							</div>
						</div>
						<div className='header__menu__item header__menu__right__item'>
							<Link to='/cart'>
								<i className='bx bx-shopping-bag'></i>
							</Link>
							<div className='header__menu__item header__menu__right__item__cart__length'>
								<span>{totalProducts}</span>
							</div>
						</div>
						<div className='header__menu__item header__menu__right__item'>
							{user.user !== null ? (
								<Link to={`/profile`}>
									<i className='bx bx-user'></i>
								</Link>
							) : (
								<Link to='/login'>
									<i className='bx bx-user'></i>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
