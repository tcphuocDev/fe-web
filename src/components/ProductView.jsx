// @ts-nocheck
import React, { useState } from 'react';
import { withRouter } from 'react-router';
// import Button from './Button';
import { toast } from 'react-toastify';
import { ROOT_URL } from 'constant/config';
import { isEmpty, map, uniq } from 'lodash';
import { addToLocal } from 'common/local-storage';
import { formatMoney } from 'common/common';
import { Button } from 'antd';

const ProductView = (props) => {
	const { product, isLoading, setIsLoading } = props;
	const [previewImg, setPreViewImg] = useState(
		`${ROOT_URL}/${product?.productImages[0]?.url}`,
	);
	const [descriptionExpand, setDescriptionExpand] = useState(false);
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
							setPreViewImg(`${ROOT_URL}/${product?.productImages[2]?.url}`)
						}
					>
						<img src={`${ROOT_URL}/${product?.productImages[2]?.url}`} alt='' />
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
									// <div
									// 	key={index}
									// 	className={`product__info__item__list__item ${
									// 		color !== item.color.code ? '' : 'active'
									// 	}`}
									// 	onClick={() =>
									// 		setSelectedItem({ version: item, product: product })
									// 	}
									// >
									// 	<div className={`circle bg-${item.color.code}`}></div>
									// </div>
									<>
										<Button
											// className={`circle bg-${item.color.code}`}
											type={
												selectedItem?.version.color?.name === item.color?.name
													? 'primary'
													: 'danger'
											}
											onClick={() =>
												setSelectedItem({ version: item, product: product })
											}
										>
											{item.color.name}
										</Button>
									</>
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
								console.log('ite,-0', item);
								return (
									// <div
									// 	key={index}
									// 	className={`product__info__item__list__item ${
									// 		size === item.size.name ? 'active' : ''
									// 	}`}
									// 	onClick={() =>
									// 		setSelectedItem({ version: item, product: product })
									// 	}
									// >
									// 	{/* <span
									// 		className={`product__info__item__list__item ${
									// 			size === item.size.name ? 'active' : ''
									// 		}`}
									// 		onClick={() => setSize(item.size.name)}
									// 	></span> */}
									// 	<div className='product__info__item__list__item__size'>
									// 		{item.size.name}
									// 	</div>
									// </div>
									<>
										<Button
											key={index}
											type={
												selectedItem?.version.size?.name === item.size.name
													? 'primary'
													: 'danger'
											}
											onClick={() =>
												setSelectedItem({ version: item, product: product })
											}
										>
											{item.size.name}
										</Button>
									</>
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
							Thêm vào giỏ
						</Button>
						<Button size='sm' onClick={goToCart}>
							Mua ngay
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
