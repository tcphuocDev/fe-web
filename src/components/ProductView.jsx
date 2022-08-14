import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Button from './Button';
// import numberWithCommas from 'utils/numberWithCommas';
import { addItem } from 'redux/shopping-cart/cartItemsSlide';
import { toast } from 'react-toastify';
import { ROOT_URL } from 'constant/config';
import { addToCart } from 'redux/actions/cart.action';

const ProductView = (props) => {
	const { product } = props;
	const dispatch = useDispatch();
	const [previewImg, setPreViewImg] = useState(
		`${ROOT_URL}/${product?.productImages[0]?.url}`,
	);
	const [descriptionExpand, setDescriptionExpand] = useState(false);
	const [change, setChange] = useState(false);
	const [color, setColor] = useState(undefined);
	const [size, setSize] = useState(undefined);
	const [quantity, setQuantity] = useState(1);
	// const actualQuantity = product.productVersions.map((item) => item.quantity);
	// console.log(actualQuantity);
	const check = () => {
		if (color === undefined) {
			toast.warning('Vui lòng chọn màu sắc !', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return false;
		}
		if (size === undefined) {
			toast.warning('Vui lòng chọn kích cỡ !', {
				position: toast.POSITION.TOP_RIGHT,
			});
			return false;
		}

		return true;
	};
	const handleAddToCart = () => {
		const params = {
			images: product?.productImages[0],
			id: product?.id,
			price: product?.price,
			salePrice: product?.salePrice,
			color: color,
			size: size,
			quantity: quantity,
			name: product?.name,
		};
		if (check()) {
			dispatch(
				addToCart(params, () => {
					toast.success('Thêm vào giỏ hàng thành công');
					setChange(!change);
				}),
			);
		}
	};
	const updateQuantity = (type) => {
		if (type === 'plus') {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
		}
	};

	// const goToCart = () => {
	// 	if (check()) {
	// 		dispatch(
	// 			addItem({
	// 				slug: product.slug,
	// 				color: color,
	// 				size: size,
	// 				quantity: quantity,
	// 				price: product.price,
	// 			}),
	// 		);
	// 	}
	// 	props.history.push('/cart');
	// };
	return (
		<div className='product'>
			<div className='product__images'>
				<div className='product__images__list'>
					<div
						className='product__images__list__item'
						onClick={() =>
							setPreViewImg(`${ROOT_URL}/${product?.productImages[0]?.url}`)
						}
					>
						<img src={`${ROOT_URL}/${product?.productImages[0]?.url}`} alt='' />
					</div>
					<div
						className='product__images__list__item'
						onClick={() =>
							setPreViewImg(`${ROOT_URL}/${product?.productImages[1]?.url}`)
						}
					>
						<img src={`${ROOT_URL}/${product?.productImages[1]?.url}`} alt='' />
					</div>
				</div>
				<div className='product__images__main'>
					<img src={previewImg} alt='' />
				</div>
				<div
					className={`product-description ${descriptionExpand ? 'expand' : ''}`}
				>
					<div className='product-description__title'>Chi tiết sản phẩm</div>
					<div
						className='product-description__content'
						dangerouslySetInnerHTML={{ __html: product?.description }}
					></div>
					<div className='product-description__toggle'>
						<Button
							size='sm'
							onClick={() => setDescriptionExpand(!descriptionExpand)}
						>
							{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
						</Button>
					</div>
				</div>
			</div>
			<div className='product__info'>
				<h1 className='product__info__title'>{product.name}</h1>
				<div className='product__info__item'>
					<span className='product__info__item__price'>{product.price}</span>
					<div className='product__info__item'>
						<div className='product__info__item__title'>Màu sắc</div>
						<div className='product__info__item__list'>
							{product?.productVersions?.map((item, index) => {
								return (
									<div
										key={index}
										className={`product__info__item__list__item ${
											color !== item.color.name ? '' : 'active'
										}`}
										onClick={() => setColor(item.color.name)}
									>
										<div className={`circle bg-${item.color.code}`}></div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='product__info__item'>
						<div className='product__info__item__title'>Kích cỡ</div>
						<div className='product__info__item__list'>
							{product?.productVersions?.map((item, index) => (
								<div
									key={index}
									className={`product__info__item__list__item ${
										size === item.size.name ? 'active' : ''
									}`}
									onClick={() => setSize(item.size.name)}
								>
									<div className='product__info__item__list__item__size'>
										{item.size.name}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='product__info__item'>
						<div className='product__info__item__title'>Số lượng</div>
						<div className='product__info__item__quantity'>
							<div
								className='product__info__item__quantity__btn'
								onClick={() => updateQuantity('minus')}
							>
								<i className='bx bx-minus'></i>
							</div>
							<div className='product__info__item__quantity__input'>
								{quantity}
							</div>
							<div
								className='product__info__item__quantity__btn'
								onClick={() => updateQuantity('plus')}
							>
								<i className='bx bx-plus'></i>
							</div>
						</div>
					</div>
					<div className='product__info__item'>
						<Button size='sm' onClick={handleAddToCart}>
							thêm vào giỏ
						</Button>
						<Button size='sm' onClick={() => console.log('aaaaaaaaaaa')}>
							mua ngay
						</Button>
					</div>
				</div>
			</div>
			<div
				className={`product-description mobile ${
					descriptionExpand ? 'expand' : ''
				}`}
			>
				<div className='product-description__title'>Chi tiết sản phẩm</div>
				<div
					className='product-description__content'
					dangerouslySetInnerHTML={{ __html: product?.description }}
				></div>
				<div className='product-description__toggle'>
					<Button
						size='sm'
						onClick={() => setDescriptionExpand(!descriptionExpand)}
					>
						{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ProductView);
