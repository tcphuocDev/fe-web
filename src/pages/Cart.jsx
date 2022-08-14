import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import productData from 'assets/fake-data/products';

import Helmet from 'components/Helmet';
import Button from 'components/Button';
import CartItem from 'components/CartItem';
import numberWithCommas from 'utils/numberWithCommas';
const Cart = () => {
	const [products, setProducts] = useState([]);
	const [totalProducts, setTotalProducts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		setProducts(JSON.parse(localStorage.getItem('CART')));
	}, []);

	useEffect(() => {
		setTotalProducts(
			products?.reduce((total, item) => total + Number(item?.quantity), 0),
		);
		setTotalPrice(
			products?.reduce(
				(total, item) => total + Number(item?.quantity) * Number(item?.price),
				0,
			),
		);
	}, [products]);
	return (
		<Helmet title='Giỏ hàng'>
			<div className='cart'>
				<div className='cart__info'>
					<div className='cart__info__txt'>
						<p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
						<div className='cart__info__txt__price'>
							<span>Thành tiền:</span>{' '}
							<span>{numberWithCommas(totalPrice)} VNĐ</span>
						</div>
					</div>
					<div className='cart__info__btn'>
						{products?.length > 0 ? (
							<Link to='/checkout'>
								<Button size='block'>Đặt hàng</Button>
							</Link>
						) : (
							''
						)}
						<Link to='/catalog'>
							<Button size='block'>Tiếp tục mua hàng</Button>
						</Link>
					</div>
				</div>
				<div className='cart__list'>
					{products?.map((item, index) => (
						<CartItem item={item} key={index} />
					))}
				</div>
			</div>
		</Helmet>
	);
};

export default Cart;
