import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { showModal } from 'redux/actions/modal.actions';
import { ROOT_URL } from 'constant/config';
import { formatMoney } from 'common/common';
const ProductCard = (props) => {
	const { product } = props;
	const dispatch = useDispatch();
	return (
		<div className='product-card'>
			<Link to={`/catalog/${product.id}`}>
				<div className='product-card__image'>
					<img
						src={`${ROOT_URL}/${product?.productImages[0]?.url}`}
						alt={props.name}
						width='100%'
						className='product_img'
					/>
					<img
						src={`${ROOT_URL}/${product?.productImages[1]?.url}`}
						alt={props.name}
						width='100%'
						className='product_img'
					/>
				</div>
				<h3 className='product-card__name'>{product.name}</h3>
				<div className='product-card__price'>
					{formatMoney(product.salePrice)}
					<span className='product-card__price__old'>
						<del>{formatMoney(product.price)}</del>
					</span>
				</div>
			</Link>
			<div className='product-card__btn'>
				<Button
					size='sm'
					icon='bx bx-card'
					animate={true}
					onClick={() => dispatch(showModal(product.id))}
				>
					Chọn mua
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
