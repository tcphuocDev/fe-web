import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import facebook from '../assets/images/facebook.svg';
import google from '../assets/images/google.svg';
import linkedin from '../assets/images/linkedin.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, login, register } from '../redux/actions/auth.actions';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { notification } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const Login = (props) => {
	const [changeUser, setChangeUser] = useState(false);
	const [loginForm, setLoginFrom] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [gender, setGender] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const onSubmit = (e) => {
		e.preventDefault();
		const userInfo = {
			email: email,
			password: password,
		};
		dispatch(
			login(userInfo, () => {
				toast.success('Đăng nhập thành công');
				dispatch(
					getProfile(() => {
						setChangeUser(!changeUser);
					}),
				);
			}),
		);
	};
	const handleRegister = (e) => {
		e.preventDefault();
		const params = {
			fullname: name,
			email: email,
			password: password,
			phone: phone,
			gender: +gender,
		};
		dispatch(
			register(params, () => {
				notification.success({
					message: 'Đăng ký thành công!',
					description: 'Vui lòng bấm vào nút đăng nhập!',
					duration: 2000,
				});
			}),
		);
		setName('');
		setPassword('');
		setEmail('');
	};
	if (state.auth?.token) {
		return <Redirect to='/' />;
	}
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
					hoặc sử dụng tài khoản khác
				</span>
				<div className='login__create-container__form-container'>
					<form
						className='login__create-container__form-container__form'
						onSubmit={handleRegister}
					>
						<input
							className='login__create-container__form-container__form--name'
							type='text'
							placeholder='Họ và tên'
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
						<input
							className='login__create-container__form-container__form--password'
							type='tel'
							placeholder='Số điện thoại'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
						<select
							className='login__create-container__form-container__form--gender'
							name='select'
							id=''
							value={gender}
							onChange={(e) => {
								setGender(e.target.value);
							}}
						>
							<option value='' disabled selected aria-required>
								Giới tính
							</option>
							<option value={0}>Nam</option>
							<option value={1}>Nữ</option>
						</select>
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
							<div className='login__login-container__main-container__form-container__form--wrapper'>
								<input
									className='login__login-container__main-container__form-container__form--wrapper--email'
									type='email'
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='login__login-container__main-container__form-container__form--wrapper'>
								<input
									className='login__login-container__main-container__form-container__form--wrapper--password'
									type={isShowPassword ? 'text' : 'password'}
									placeholder='Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<span
									className='login__login-container__main-container__form-container__form--wrapper--show'
									onClick={() => setIsShowPassword(!isShowPassword)}
								>
									<i
										className={
											isShowPassword ? 'bx bx-show' : 'bx bx-low-vision'
										}
									></i>
								</span>
							</div>

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
