import React, { useCallback, useState, useEffect, useRef } from 'react';
import Helmet from '../components/Helmet';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import InfinityList from '../components/InfinityList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listProduct } from 'redux/actions/product.actions';
import { listCategory } from 'redux/actions/category.action';
import { listColor } from 'redux/actions/color.actions';
import { listSize } from 'redux/actions/size.actions';

const Catalog = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const productList = useSelector((state) => state.product);
	const categoryList = useSelector((state) => state.category);
	const colorList = useSelector((state) => state.color);
	const sizeList = useSelector((state) => state.size);
	const [products, setProducts] = useState(productList?.items);
	const initFilter = {
		categories: [],
		colors: [],
		sizes: [],
	};
	const [filter, setFilter] = useState(initFilter);
	const [filters, setFilters] = useState([]);
	useEffect(() => {
		dispatch(listProduct());
		dispatch(listCategory());
		dispatch(listColor());
		dispatch(listSize());
	}, [dispatch]);
	const filterSelect = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case 'CATEGORY':
					setFilter({
						...filter,
						categories: [...filter.categories, item.slug],
					});
					break;
				case 'COLOR':
					setFilter({ ...filter, colors: [...filter.colors, item.code] });
					break;
				case 'SIZE':
					setFilter({ ...filter, sizes: [...filter.sizes, item.name] });
					break;
				default:
			}
		} else {
			switch (type) {
				case 'CATEGORY':
					const newCategory = filter.categories.filter((e) => e !== item.slug);
					setFilter({ ...filter, categories: newCategory });
					break;
				case 'COLOR':
					const newColor = filter.colors.filter((e) => e !== item.code);
					setFilter({ ...filter, colors: newColor });
					break;
				case 'SIZE':
					const newSize = filter.sizes.filter((e) => e !== item.name);
					setFilter({ ...filter, sizes: newSize });
					break;
				default:
			}
		}
	};
	console.log('filter--------------------------', filter);
	const clearFilter = () => setFilter(initFilter);

	const updateProducts = useCallback(() => {
		let temp = productList?.items;
		if (filter.categories.length > 0) {
			let categories = temp.map((e) => e.category.slug);
			let a = categoryList?.items?.map((i) => i.slug);
			categories = categories.filter((e) => a.includes(e));
		}

		if (filter.colors.length > 0) {
			let arrColor = productList?.items?.map((e) =>
				e.productVersions.map((i) => i.color.code),
			);
			const arr = [].concat(...arrColor);
			console.log('arrr', arr);
			let a = colorList?.items?.map((i) => i.code);
			arr?.filter((e) => {
				const check = a.includes(e);
				return check !== undefined;
			});
		}

		if (filter.sizes.length > 0) {
			temp = temp.filter((e) => {
				const check = e.size.find((size) => filter.size.includes(size));
				return check !== undefined;
			});
		}
	}, [filter, productList?.items]);

	useEffect(() => {
		updateProducts();
		setProducts(productList?.items);
	}, [updateProducts]);
	console.log('day l;a product', products);
	const filterRef = useRef(null);

	const showHideFilter = () => filterRef.current.classList.toggle('active');

	return (
		<Helmet title='Sản phẩm'>
			<div className='catalog'>
				<div className='catalog__filter' ref={filterRef}>
					<div
						className='catalog__filter__close'
						onClick={() => showHideFilter()}
					>
						<i className='bx bx-left-arrow-alt'></i>
					</div>
					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>
							danh mục sản phẩm
						</div>
						<div className='catalog__filter__widget__content'>
							{categoryList?.items?.length
								? categoryList?.items?.map((item, index) => (
										<div
											key={index}
											className='catalog__filter__widget__content__item'
										>
											<CheckBox
												label={item.name}
												onChange={(input) =>
													filterSelect('CATEGORY', input.checked, item)
												}
												checked={filter.categories.includes(item.slug)}
											/>
										</div>
								  ))
								: ''}
						</div>
					</div>

					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>màu sắc</div>
						<div className='catalog__filter__widget__content'>
							{colorList?.items?.length
								? colorList?.items?.map((item, index) => (
										<div
											key={index}
											className='catalog__filter__widget__content__item'
										>
											<CheckBox
												label={item.name}
												onChange={(input) =>
													filterSelect('COLOR', input.checked, item)
												}
												checked={filter.colors.includes(item.code)}
											/>
										</div>
								  ))
								: ''}
						</div>
					</div>

					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>kích cỡ</div>
						<div className='catalog__filter__widget__content'>
							{sizeList?.items?.length
								? sizeList?.items?.map((item, index) => (
										<div
											key={index}
											className='catalog__filter__widget__content__item'
										>
											<CheckBox
												label={item.name}
												onChange={(input) =>
													filterSelect('SIZE', input.checked, item)
												}
												checked={filter.sizes.includes(item.name)}
											/>
										</div>
								  ))
								: ''}
						</div>
					</div>

					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__content'>
							<Button size='sm' onClick={clearFilter}>
								xóa bộ lọc
							</Button>
						</div>
					</div>
				</div>
				<div className='catalog__filter__toggle'>
					<Button size='sm' onClick={() => showHideFilter()}>
						bộ lọc
					</Button>
				</div>
				<div className='catalog__content'>
					<InfinityList data={products} />
				</div>
			</div>
		</Helmet>
	);
};

export default Catalog;
