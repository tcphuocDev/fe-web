import React from 'react';
import cartEmptyIcon from '../../assets/images/cartEmpty.png';
import { Link } from 'react-router-dom';
function CartEmpty(props) {
	return (
		<div className='cart__empty__item'>
			<img src={cartEmptyIcon} alt='' />
			<h5>Không có sản phẩm nào trong giỏ hàng của bạn.</h5>
		</div>
	);
}

export default CartEmpty;
