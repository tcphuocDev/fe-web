import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Helmet from 'components/Helmet';
import Button from 'components/Button';
import CartItem from 'components/CartItem';
import { getFromLocal } from 'common/local-storage';
import { formatMoney } from 'common/common';
import { isEmpty } from 'lodash';
import CartEmpty from './cart/CartEmpty';

const Cart = () => {
	const [changeCart, setChangeCart] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [totalProduct, setTotalProduct] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	// useEffect(() => {
	// 	setProducts(JSON.parse(localStorage.getItem('CART')));
	// }, []);
	const state = useSelector((state) => state);
	useEffect(() => {
		setTotalProduct(
			getFromLocal('cart')?.reduce(
				(total, item) => total + item.version.currentQuantity,
				0,
			),
		);
		setTotalPrice(
			getFromLocal('cart').reduce(
				(total, item) =>
					item?.product?.salePrice
						? total + item?.product?.salePrice * item.version.currentQuantity
						: total + item?.product?.price * item.version.currentQuantity,
				0,
			),
		);
	}, [getFromLocal('cart')]);
	return (
		<Helmet title='Giỏ hàng'>
			<div className='cart'>
				<div className='cart__info'>
					<div className='cart__info__txt'>
						<p>Bạn đang có {totalProduct || 0} sản phẩm trong giỏ hàng</p>
						<div className='cart__info__txt__price'>
							<span>Thành tiền:</span> <span> {formatMoney(totalPrice)} </span>
						</div>
					</div>
					<div className='cart__info__btn'>
						{!isEmpty(state.auth.token) ? (
							<>
								{getFromLocal('cart').length <= 0 ? (
									<>
										{' '}
										<Link to='/catalog'>
											<Button size='block'>Tiếp tục mua hàng</Button>
										</Link>
									</>
								) : (
									<>
										<Link to='/checkout'>
											<Button size='block'>Tiến hành thanh toán </Button>
										</Link>
										<Link to='/catalog'>
											<Button size='block'>Tiếp tục mua hàng</Button>
										</Link>
									</>
								)}
							</>
						) : (
							<>
								<Link to='/login'>
									<Button size='block'>Đăng nhập</Button>
								</Link>
							</>
						)}
					</div>
				</div>
				<div className='cart__list'>
					{getFromLocal('cart').length > 0 ? (
						<>
							{getFromLocal('cart')?.map((item, index) => (
								<CartItem
									product={item}
									key={index}
									changeCart={changeCart}
									setChangeCart={setChangeCart}
									setIsDelete={setIsDelete}
									isDelete={isDelete}
								/>
							))}
						</>
					) : (
						<div className='cart__list__empty'>
							<CartEmpty />
						</div>
					)}
				</div>
			</div>
		</Helmet>
	);
};

export default Cart;
