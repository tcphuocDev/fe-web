import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/shopping-cart/cartItemsSlide';
import { Link } from 'react-router-dom';
import { ROOT_URL } from 'constant/config';
import numberWithCommas from 'utils/numberWithCommas';
import { updateCart } from '../redux/actions/cart.action';
const CartItem = (props) => {
	const dispatch = useDispatch();
	const [item, setItem] = useState(props.item);
	const [quantity, setQuantity] = useState(props.item.quantity);
	useEffect(() => {
		setItem(props.item);
		setQuantity(props.item.quantity);
	}, [props.item]);
	const updateQuantity = (opt) => {
		if (opt === '+') {
			dispatch(updateCart({ ...item }));
		}
		if (opt === '-') {
			dispatch(
				updateCart({
					...item,
				}),
			);
		}
	};
	const removeCartItem = () => {
		dispatch(removeItem(item));
	};
	return (
		<div className='cart__item'>
			<div className='cart__item__image'>
				<img src={`${ROOT_URL}/${item?.images?.url}`} alt='' />
			</div>
			<div className='cart__item__info'>
				<div className='cart__item__info__name'>
					<Link to={`/catalog/${item?.id}`}>
						{`${item?.name} - ${item?.color} - ${item?.size}`}
					</Link>
				</div>
				<div className='cart__item__info__price'>
					{numberWithCommas(item?.price)} VNĐ
				</div>
				<div className='cart__item__info__quantity'>
					<div className='product__info__item__quantity'>
						<div
							className='product__info__item__quantity__btn'
							onClick={() => updateQuantity('-')}
						>
							<i className='bx bx-minus'></i>
						</div>
						<div className='product__info__item__quantity__input'>
							{quantity}
						</div>
						<div
							className='product__info__item__quantity__btn'
							onClick={() => updateQuantity('+')}
						>
							<i className='bx bx-plus'></i>
						</div>
					</div>
				</div>
				<div className='cart__item__info__del'>
					<i className='bx bx-trash' onClick={() => removeCartItem()}></i>
				</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
