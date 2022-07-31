import React from 'react';
import Helmet from '../components/Helmet';
import Grid from 'components/Grid';
import ProductCard from 'components/ProductCard';
import Section, { SectionTitle, SectionBody } from 'components/Section';
import ProductView from 'components/ProductView';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { detail, listProduct } from 'redux/actions/product.actions';
import { useState } from 'react';
const Product = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.product);
	const relatedProducts = useSelector((state) => state.product);
	const { id } = useParams();
	useEffect(() => {
		dispatch(
			detail(id, () => {
				setIsLoading(true);
				dispatch(
					listProduct({
						isSame: productDetail?.item?.category?.id,
						limit: 8,
					}),
				);
			}),
		);
	}, [dispatch, id, productDetail?.item?.category?.id]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [productDetail?.item]);
	return (
		<Helmet title={productDetail?.item?.name}>
			<Section>
				<SectionBody>
					{isLoading && <ProductView product={productDetail?.item} />}
				</SectionBody>
			</Section>
			<Section>
				<SectionTitle>Khám phá thêm</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{relatedProducts?.items?.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
	);
};

export default Product;
