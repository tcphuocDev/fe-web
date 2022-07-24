// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductView from './ProductView';
import Button from './Button';
import productData from '../assets/fake-data/products';
import { closeModal } from 'redux/actions/modal.actions';

const ProductViewModal = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const [product, setProduct] = useState(undefined);

	useEffect(() => {
		setProduct(productData.getProductBySlug(state.modal.value));
	}, [state.modal.value]);
	return (
		<div
			className={`product-view__modal ${product === undefined ? '' : 'active'}`}
		>
			<div className='product-view__modal__content'>
				<ProductView product={product} />
				<div className='product-view__modal__content__close'>
					<Button size='sm' onClick={() => dispatch(closeModal())}>
						đóng
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductViewModal;
