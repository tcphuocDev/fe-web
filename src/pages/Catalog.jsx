// @ts-nocheck
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
import SearchBar from 'components/SearchBar';
import SliderProton from 'components/SliderProton';
import { Pagination } from '@mui/material';
import EmptyView from 'components/EmptyView';
import { Paper } from '@material-ui/core';
import ProductSort from 'components/Product-sort';

const Catalog = () => {
	const dispatch = useDispatch();
	const [selectedPrice, setSelectedPrice] = useState([100000, 850000]);
	const productList = useSelector((state) => state.product);
	const categoryList = useSelector((state) => state.category);
	const colorList = useSelector((state) => state.color);
	const sizeList = useSelector((state) => state.size);
	const [page, setPage] = useState(1);
	const [resultsFound, setResultsFound] = useState(true);
	const [searchInput, setSearchInput] = useState('');
	const [sort, setSort] = useState({ limit: 8 });
	const [products, setProducts] = useState(productList?.items);
	const initFilter = {
		categories: [],
		colors: [],
		sizes: [],
	};
	const [filter, setFilter] = useState(initFilter);
	useEffect(() => {
		dispatch(listProduct(sort));
		dispatch(listCategory());
		dispatch(listColor());
		dispatch(listSize());
	}, [sort, dispatch]);
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
	const clearFilter = () => setFilter(initFilter);

	const handleChangePrice = (e, value) => {
		setSelectedPrice(value);
	};
	const handleSortChange = (newSortValue) => {
		setSort({
			...sort,
			orderPrice: newSortValue,
		});
	};
	const updateProducts = useCallback(() => {
		let temp = productList?.items;
		if (filter.categories.length > 0) {
			temp = temp.filter((e) => filter.categories.includes(e.category?.slug));
		}

		if (filter.colors.length > 0) {
			temp = temp.filter((e) => {
				const check = e?.productVersions?.find((item) =>
					filter?.colors?.includes(item?.color?.code),
				);
				return check !== undefined;
			});
		}

		if (filter.sizes.length > 0) {
			temp = temp.filter((e) => {
				const check = e?.productVersions?.find((item) =>
					filter?.sizes?.includes(item?.size?.name),
				);
				return check !== undefined;
			});
		}

		if (searchInput) {
			temp = temp.filter(
				(item) =>
					item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
					-1,
			);
		}

		const minPrice = selectedPrice[0];
		const maxPrice = selectedPrice[1];

		temp = temp.filter(
			(item) => item.price >= minPrice && item.price <= maxPrice,
		);

		setProducts(temp);
		!temp.length ? setResultsFound(false) : setResultsFound(true);
	}, [filter, productList?.items, selectedPrice, searchInput]);
	useEffect(() => {
		updateProducts();
	}, [updateProducts, productList?.items, selectedPrice, searchInput]);
	const filterRef = useRef(null);

	const showHideFilter = () => filterRef.current.classList.toggle('active');

	return (
		<Helmet title='Sản phẩm'>
			<div className='catalog__top'>
				<div className='catalog__search'>
					<SearchBar
						value={searchInput}
						changeInput={(e) => setSearchInput(e.target.value)}
					/>
				</div>
			</div>
			<div className='catalog'>
				<div className='catalog__filter' ref={filterRef}>
					{/* <div className='catalog__search'>
						<SearchBar
							value={searchInput}
							changeInput={(e) => setSearchInput(e.target.value)}
						/>
					</div> */}

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
												checked={filter.categories.includes(item?.slug)}
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
					<div className='catalog___filter__price'>
						<div className='catalog__filter__price__title'>Khoảng giá:</div>
						<div className='catalog___filter__price__item'>
							<SliderProton
								value={selectedPrice}
								changePrice={handleChangePrice}
							/>
						</div>
					</div>
				</div>
				<div className='catalog__filter__toggle'>
					<Button size='sm' onClick={() => showHideFilter()}>
						bộ lọc
					</Button>
				</div>
				<div className='catalog__content'>
					<div className='catalog__content__sort'>
						<div className='row'>
							<h4>Sắp xếp theo</h4>
							<ProductSort
								current={sort?.orderPrice}
								onchange={handleSortChange}
							/>
						</div>
					</div>
					{resultsFound ? (
						<>
							<InfinityList data={products} />
						</>
					) : (
						<EmptyView />
					)}
					{/* <Pagination
						style={{
							float: 'right',
							marginBottom: '40px',
							marginTop: '-40px',
						}}
						count={Math.ceil(productList.meta.total / 8)}
						page={page}
						// onChange={handleChange}
					/> */}
				</div>
			</div>
		</Helmet>
	);
};

export default Catalog;
