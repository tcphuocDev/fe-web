import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductView from './ProductView';
import Button from './Button';
import { closeModal } from 'redux/actions/modal.actions';
import { detail } from 'redux/actions/product.actions';

const ProductViewModal = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.product);
	const id = useSelector((state) => state.modal.value);
	const isOpenModal = useSelector((state) => state.modal.isOpenModal);
	useEffect(() => {
		if (id) {
			dispatch(
				detail(id, () => {
					setIsLoading(true);
				}),
			);
		}
	}, [id]);
	return (
		<div className={`product-view__modal ${isOpenModal ? 'active' : ''}`}>
			<div className='product-view__modal__content'>
				{isLoading && (
					<ProductView
						product={productDetail?.item}
						isLoading={isLoading}
						setIsLoading={setIsLoading}
					/>
				)}
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
