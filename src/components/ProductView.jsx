// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Button from './Button';
import { toast } from 'react-toastify';
import { ROOT_URL } from 'constant/config';
import { addToCart } from 'redux/actions/cart.action';
import { isEmpty, map, uniq } from 'lodash';
import { addToLocal } from 'common/local-storage';
import { formatMoney } from 'common/common';

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
	const [selectedItem, setSelectedItem] = useState();
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
			slug: product.slug,
			images: product?.productImages[0],
			id: product?.id,
			price: product?.price,
			salePrice: product?.salePrice,
			color: color,
			size: size,
			quantity: quantity,
			versions: uniq(map(product?.productVersions, 'id')),
			name: product?.name,
		};
		if (check()) {
			dispatch(
				addToCart(params, () => {
					toast.success('Thêm vào giỏ hàng thành công');
					setChange(!change);
				}),
			);
			toast.success('Thêm sản phẩm giỏ hàng thành công !', {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};



	const handleBuy = () => {
		if (!isEmpty(selectedItem)) {
			addToLocal('cart', selectedItem);
			toast.success('Thêm vào giỏ hàng thành công');
		} else {
			check();
		}
	};
	const updateQuantity = (type) => {
		if (type === 'plus') {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
		}
	};

	const goToCart = () => {
		if (!isEmpty(selectedItem)) {
			addToLocal('cart', selectedItem);
			toast.success('Thêm vào giỏ hàng thành công');
			props.history.push('/cart');
		} else {
			check();
		}
	};
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
					<div
						className='product__images__list__item'
						onClick={() =>
							setPreViewImg(`${ROOT_URL}/${product?.productImages[1]?.url}`)
						}
					>
						<img src={`${ROOT_URL}/${product?.productImages[1]?.url}`} alt='' />
					</div>
					<div
						className='product__images__list__item'
						onClick={() =>
							setPreViewImg(`${ROOT_URL}/${product?.productImages[1]?.url}`)
						}
					>
						<img src={`${ROOT_URL}/${product?.productImages[1]?.url}`} alt='' />
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
						dangerouslySetInnerHTML={{ __html: product.description }}
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
				<h1 className='product__info__title'>{product?.name}</h1>
				<div className='product__info__item'>
					{product?.salePrice && product?.price ? (
						<>
							<span className='product__info__item__price'>
								{product ? formatMoney(product?.salePrice) : ''}
							</span>
							<span className='product__info__item__price__old'>
								<del>{product ? formatMoney(product?.price) : ''}</del>
							</span>
						</>
					) : (
						<span className='product__info__item__price'>
							{product ? formatMoney(product?.price) : ''}
						</span>
					)}
					<div className='product__info__item'>
						<div className='product__info__item__title'>
							Màu sắc : {selectedItem?.version.color.name}
						</div>
						<div className='product__info__item__list'>
							{product?.productVersions?.map((item, index) => {
								return (
									<div
										key={index}
										className={`product__info__item__list__item ${
											color !== item.color.code ? '' : 'active'
										}`}
										onClick={() =>
											setSelectedItem({ version: item, product: product })
										}
									>
										<div className={`circle bg-${item.color.code}`}></div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='product__info__item'>
						<div className='product__info__item__title'>
							Kích cỡ: {selectedItem?.version.size.name}
						</div>
						<div className='product__info__item__list'>
							{product?.productVersions?.map((item, index) => {
								return (
									<div
										key={index}
										className={`product__info__item__list__item ${
											size === item.size.name ? 'active' : ''
										}`}
										onClick={() =>
											setSelectedItem({ version: item, product: product })
										}
									>
										<div className='product__info__item__list__item__size'>
											{item.size.name}
										</div>
									</div>
								);
							})}
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
						<div className='product__info__item__title'>
							Kho:
							{selectedItem ? selectedItem?.version.quantity : '0'}
						</div>
					</div>
					<div className='product__info__item'>
						<Button size='sm' onClick={handleBuy}>
							thêm vào giỏ
						</Button>
						<Button size='sm' onClick={goToCart}>
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
	</div>
	);
};



export default withRouter(ProductView);
