// @ts-nocheck
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import React, { useEffect, useState } from 'react';
import imagePrudct from '../../assets/images/products/product-01 (1).jpg';
const Checkout = () => {
	return (
		<Helmet title='Thanh toán'>
			<div className='checkout grid'>
				<div className='row wide'>
					<div className='col l-4 m-12 c-12 checkout__column__item'>
						<h1 className='checkout__column__item__heading'>
							Thông tin hóa đơn
						</h1>
						<div className='checkout__column__item__form'>
							<div className='checkout__column__item__form__group'>
								<label htmlFor=''>Họ và tên</label>
								<input type='text' name='' id='' />
							</div>
							<div className='checkout__column__item__form__group'>
								<div className='row'>
									<div className='col l-6 m-12 checkout__column__item__form__group__item'>
										<label htmlFor=''>Email</label>
										<input type='email' name='' id='' />
									</div>
									<div className='col l-6 m-12 checkout__column__item__form__group__item'>
										<label htmlFor=''>Điện thoại</label>
										<input type='tel' name='' id='' />
									</div>
								</div>
							</div>
							<div className='l-6 m-12 c-12 checkout__column__item__form__group'>
								<label htmlFor=''>Địa Chỉ</label>
								<input type='text' name='' id='' />
							</div>
							<div className='checkout__column__item__form__group'>
								<div className='row'>
									<div className='col l-6 m-12 c-12 checkout__column__item__form__group__item'>
										<label htmlFor=''>Tỉnh/ Thành phố </label>
										<input type='text' name='' id='' />
									</div>
									<div className='col l-6 m-12 c-12  checkout__column__item__form__group__item'>
										<label htmlFor=''>Quận/ Huyện</label>
										<input type='text' name='' id='' />
									</div>
								</div>
							</div>
							<div className='l-6 m-12 c-12 checkout__column__item__form__group'>
								<label htmlFor=''>Phường/ Xã</label>
								<input type='text' name='' id='' />
							</div>
							<div className='checkout__column__item__form__group'>
								<label htmlFor=''>Ghi chú đơn hàng</label>
								<textarea></textarea>
							</div>
						</div>
					</div>
					<div className='col l-4 c-12 checkout__column__item'>
						<h1 className='checkout__column__item__heading'>
							Phương thức thanh toán
						</h1>
						<div className='checkout__column__item__payment'>
							<input type='radio' name='' id='' />
							<span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
						</div>
					</div>
					<div className='col l-4 c-12 checkout__column__item'>
						<h1 className='checkout__column__item__heading'>
							Thông tin giỏ hàng
						</h1>
						<div className='checkout__column__item__table'>
							<div className='table__header'>
								<div className='row'>
									<div className='col l-3 c-3 table__header__item'>
										Hình ảnh
									</div>
									<div className='col l-3 c-3 table__header__item'>
										Tên sản phẩm
									</div>
									<div className='col l-3 c-3 table__header__item'>
										Số lượng
									</div>
									<div className='col l-3 c-3 table__header__item'>Giá</div>
								</div>
							</div>
							<div className='table__item'>
								<div className='col l-3 c-3 table__item__image'>
									<img src={imagePrudct} alt='' />
								</div>
								<div className='col l-9 c-9 table__item__info'>
									<div className='col l-4 c-4 table__item__info__name'>
										<h4>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										</h4>
									</div>
									<div className=' col l-2 c-2 table__item__info__quantity'>
										<h4>4</h4>
									</div>
									<div className=' col l-3 c-3 able__item__info__price'>
										<h4>265.000</h4>
									</div>
								</div>
							</div>
							<div className='table__item'>
								<div className='col l-3 c-3 table__item__image'>
									<img src={imagePrudct} alt='' />
								</div>
								<div className='col l-9 c-9 table__item__info'>
									<div className='col l-4 c-4 table__item__info__name'>
										<h4>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										</h4>
									</div>
									<div className=' col l-2 c-2 table__item__info__quantity'>
										<h4>4</h4>
									</div>
									<div className=' col l-3 c-3 able__item__info__price'>
										<h4>265.000</h4>
									</div>
								</div>
							</div>
							<div className='payment'>
								<div className='payment__item'>
									<div className='col l-6 c-6 payment__item__title'>
										<h4>Tạm tính</h4>
									</div>
									<div className='col l-6 c-6 payment__item__price'>
										<h4>365.000 VND</h4>
									</div>
								</div>
								<div className='payment__item'>
									<div className='col l-6 c-6 payment__item__title'>
										<h4>Phí vận chuyển(Toàn quốc)</h4>
									</div>
									<div className='col l-6 c-6 payment__item__price'>
										<h4>25.000 VND</h4>
									</div>
								</div>
								<div className='payment__item'>
									<div className='col l-6 c-6 payment__item__title'>
										<h4>Tổng cộng</h4>
									</div>
									<div className='col l-6 c-6 payment__item__price'>
										<h4>390.000 VND</h4>
									</div>
								</div>
							</div>
							<div className='button__group'>
								<Button className='button__group__item' size='block'>
									Tiếp tục mua hàng
								</Button>
								<Button className='button__group__item' size='block'>
									Thanh toán
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Helmet>
	);
};

export default Checkout;
