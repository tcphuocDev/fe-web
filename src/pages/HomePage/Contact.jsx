// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'components/Helmet';
import Button from 'components/Button';

const Contact = (props) => {
	return (
		<Helmet title='Liên hệ'>
			<div className='contact wide'>
				<div className='contact__content__title'>
					<h1>LIÊN HỆ</h1>
				</div>
				<div className='contact__content'>
					<div className='col l-4 m-12 contact__content__item'>
						<i className='bx bxs-location-plus'></i>
						<div className='contact__content__item__info'>
							<span className='contact__content__item__info__title'>
								Địa chỉ:
							</span>
							<br></br>
							<span>Công ty cổ phần thời trang YOLO</span>
						</div>
					</div>
					<div className='col l-4 m-12 contact__content__item'>
						<i class='bx bx-phone'></i>
						<div className='contact__content__item__info'>
							<span className='contact__content__item__info__title'>
								Điện thoại:
							</span>
							<br></br>
							<span>024 730 56665</span>
						</div>
					</div>
					<div className='col l-4 m-12 contact__content__item'>
						<i class='bx bx-question-mark'></i>
						<div className='contact__content__item__info'>
							<span className='contact__content__item__info__title'>
								Gửi thắc mắc:
							</span>
							<br></br>
							<span>chamsockhachhang@yolo.vn</span>
						</div>
					</div>
				</div>
				<div className='contact__content__form'>
					<div className='l-4 contact__content__form__left'>
						<div className='iFrameMap'>
							<div
								id='contact__content__form__left__video'
								className='contact__content__form__left__video'
							>
								<iframe
									width='506.66'
									height='450'
									src='https://www.youtube.com/embed/FarpRvzqYUg'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
					<div className='col l-8  contact__content__form__right'>
						<div className='contact__content__form__right__group'>
							<div className='l-5-8 contact__content__form__right__group__item'>
								<label htmlFor=''>Họ và tên</label>
								<br />
								<input type='text' />
							</div>
							<div className='l-5-8  contact__content__form__right__group__item'>
								<label htmlFor=''>Email</label>
								<br />
								<input type='email' />
							</div>
						</div>
						<div className='contact__content__form__right__text'>
							<div className='l-12 contact__content__form__right__text__item'>
								<h4 htmlFor=''>Nội dung</h4>
								<textarea name='' id='' cols='30' rows='10'></textarea>
							</div>
						</div>
						<Button size='sm'>Gửi</Button>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

Contact.propTypes = {};

export default Contact;
