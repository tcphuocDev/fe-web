// @ts-nocheck
import Helmet from 'components/Helmet';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import CheckBox from 'components/CheckBox';
import colors from 'assets/fake-data/product-color';
import size from 'assets/fake-data/product-size';
import Button from 'components/Button';
import InfinityList from 'components/InfinityList';
import productData from 'assets/fake-data/products';
const Accessory = (props) => {
	const initFilter = {
		accessory: [],
		color: [],
		size: [],
	};
	const accessoryList = productData.getAllAccessoryProducts();

	const [accessoryProduct, setAccessoryProduct] = useState(accessoryList);

	const [filter, setFilter] = useState(initFilter);
	const filterSelect = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case 'ACCESSORY':
					setFilter({
						...filter,
						accessory: [...filter.accessory, item.accessorySlug],
					});
					break;
				case 'COLOR':
					setFilter({ ...filter, color: [...filter.color, item.color] });
					break;
				case 'SIZE':
					setFilter({ ...filter, size: [...filter.size, item.size] });
					break;
				default:
			}
		} else {
			switch (type) {
				case 'ACCESSORY':
					const newAccessory = filter.accessory.filter(
						(e) => e !== item.accessorySlug,
					);
					setFilter({ ...filter, accessory: newAccessory });
					break;
				case 'COLOR':
					const newColor = filter.color.filter((e) => e !== item.color);
					setFilter({ ...filter, color: newColor });
					break;
				case 'SIZE':
					const newSize = filter.size.filter((e) => e !== item.size);
					setFilter({ ...filter, size: newSize });
					break;
				default:
			}
		}
	};

	const clearFilter = () => setFilter(initFilter);
	const updateAccessoryProducts = useCallback(() => {
		let temp = accessoryList;

		if (filter.accessory.length > 0) {
			temp = temp.filter((e) => filter.accessory.includes(e.accessorySlug));
		}

		if (filter.color.length > 0) {
			temp = temp.filter((e) => {
				const check = e.colors.find((color) => filter.color.includes(color));
				return check !== undefined;
			});
		}

		if (filter.size.length > 0) {
			temp = temp.filter((e) => {
				const check = e.size.find((size) => filter.size.includes(size));
				return check !== undefined;
			});
		}

		setAccessoryProduct(temp);
	}, [filter, accessoryList]);
	useEffect(() => {
		updateAccessoryProducts();
	}, [updateAccessoryProducts]);
	const filterRef = useRef(null);
	const showHideFilter = () => filterRef.current.classList.toggle('active');
	return (
		<Helmet title='Phụ kiện'>
			<div className='accessory'>
				<div className='accessory__filter' ref={filterRef}>
					<div
						className='accessory__filter__close'
						onClick={() => showHideFilter()}
					>
						<i className='bx bx-left-arrow-alt'></i>
					</div>
					<div className='accessory__filter__widget'>
						<div className='accessory__filter__widget__title'>
							Danh mục phụ kiện
						</div>
						<div className='accessory__filter__widget__content'>
							{accessoryProduct.map((item, index) => (
								<div
									key={index}
									className='accessory__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('ACCESSORY', input.checked, item)
										}
										checked={filter.accessory.includes(item.accessorySlug)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className='accessory__filter__widget'>
						<div className='accessory__filter__widget__title'>màu sắc</div>
						<div className='accessory__filter__widget__content'>
							{colors.map((item, index) => (
								<div
									key={index}
									className='accessory__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('COLOR', input.checked, item)
										}
										checked={filter.color.includes(item.color)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className='accessory__filter__widget'>
						<div className='accessory__filter__widget__title'>Kích cỡ</div>
						<div className='accessory__filter__widget__content'>
							{size.map((item, index) => (
								<div
									key={index}
									className='accessory__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('SIZE', input.checked, item)
										}
										checked={filter.size.includes(item.size)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className='accessory__filter__widget'>
						<div className='accessory__filter__widget__content'>
							<Button size='sm' onClick={clearFilter}>
								xóa bộ lọc
							</Button>
						</div>
					</div>
				</div>
				<div className='accessory__filter__toggle'>
					<Button size='sm' onClick={() => showHideFilter()}>
						bộ lọc
					</Button>
				</div>
				<div className='accessory__content'>
					<InfinityList data={accessoryProduct} />
				</div>
			</div>
		</Helmet>
	);
};

export default Accessory;
