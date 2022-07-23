// @ts-nocheck
import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import facebook from '../assets/images/facebook.svg';
import google from '../assets/images/google.svg';
import linkedin from '../assets/images/linkedin.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authSlice';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
	const [loginForm, setLoginFrom] = useState();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const isLoggedIn = useSelector((state) => state.auth);

	const onSubmit = (e) => {
		e.preventDefault();

		const userInfo = {
			email,
			password,
		};
		dispatch(login(userInfo));
		history.push(props.fromState || '/');
	};
	console.log(isLoggedIn);
	return (
		<div className='login'>
			<div
				className={`login__colored-container ${
					loginForm
						? 'login__colored-container--left'
						: 'login__colored-container--right'
				}`}
			></div>
			<div
				className={`login__welcome-back ${
					loginForm
						? 'login__welcome-back--active'
						: 'login__welcome-back--inactive'
				}`}
			>
				<div className='login__welcome-back__logo-container'>
					<img
						className='login__welcome-back__logo-container--image'
						src={logo}
						alt='Npc'
					/>
					Fashion Shop
				</div>
				<div className='login__welcome-back__main-container'>
					<div className='login__welcome-back__main-container__text-container'>
						<span className='login__welcome-back__main-container__text-container--title'>
							Chào mừng bạn trở lại!
						</span>
						<span className='login__welcome-back__main-container__text-container--secondary'>
							Để tiếp tục tải nghiệm vui lòng bạn đăng nhập tài khoản
						</span>
					</div>
					<div
						onClick={() => {
							setLoginFrom(!loginForm);
						}}
						className='login__welcome-back__main-container__button-container'
					>
						Đăng nhập
					</div>
				</div>
			</div>
			<div
				className={`login__create-container ${
					loginForm
						? 'login__create-container--active'
						: 'login__create-container--inactive'
				}`}
			>
				Đăng kí tài khoản
				<div className='login__create-container__social-container'>
					<img
						className='login__create-container__social-container--facebook-icon'
						src={facebook}
						alt=''
					/>
					<img
						className='login__create-container__social-container--google-icon'
						src={google}
						alt=''
					/>
					<img
						className='login__create-container__social-container--linkedin-icon'
						src={linkedin}
						alt=''
					/>
				</div>
				<span className='login__create-container--info-text'>
					hoặc sử dụng tài khoản khác để đăng kí tài khoản
				</span>
				<div className='login__create-container__form-container'>
					<form
						className='login__create-container__form-container__form'
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<input
							className='login__create-container__form-container__form--name'
							type='text'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							className='login__create-container__form-container__form--email'
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							className='login__create-container__form-container__form--password'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button className='login__create-container__form-container__form--submit'>
							Đăng kí
						</button>
					</form>
				</div>
			</div>
			<div
				className={`login__login-container ${
					!loginForm
						? 'login__login-container--active'
						: 'login__login-container--inactive'
				}`}
			>
				<div className='login__login-container__logo-container'>
					<img
						className='login__login-container__logo-container--image'
						src={logo}
						alt='NPC'
					/>
					Fashion Shop
				</div>
				<div className='login__login-container__main-container'>
					<div className='login__login-container__main-container__social-container'>
						<img
							className='login__login-container__main-container__social-container--facebook-icon'
							src={facebook}
							alt=''
						/>
						<img
							className='login__login-container__main-container__social-container--google-icon'
							src={google}
							alt=''
						/>
						<img
							className='login__login-container__main-container__social-container--linkedin-icon'
							src={linkedin}
							alt=''
						/>
					</div>
					<span className='login__login-container__main-container--info-text'>
						sử dụng email để đăng nhập
					</span>
					<div className='login__login-container__main-container__form-container'>
						<form
							className='login__login-container__main-container__form-container__form'
							onSubmit={onSubmit}
						>
							<input
								className='login__login-container__main-container__form-container__form--email'
								type='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								className='login__login-container__main-container__form-container__form--password'
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<button className='login__login-container__main-container__form-container__form--submit'>
								Đăng nhập
							</button>
						</form>
					</div>
				</div>
			</div>
			<div
				className={`login__hello-container ${
					!loginForm
						? 'login__hello-container--active'
						: 'login__hello-container--inactive'
				}`}
			>
				<div className='login__welcome-back__main-container__text-container'>
					<span className='login__welcome-back__main-container__text-container--title'>
						Chào mừng bạn đến với thế giới của YOLO !
					</span>
					<span className='login__welcome-back__main-container__text-container--secondary'>
						Điền thông tin chi tiết của bạn , và bắt đầu trải nghiệm sản phẩm
						của chúng tôi!
					</span>
				</div>
				<div
					onClick={() => {
						setLoginFrom(!loginForm);
					}}
					className='login__welcome-back__main-container__button-container'
				>
					Đăng kí
				</div>
			</div>
		</div>
	);
};

export default Login;
