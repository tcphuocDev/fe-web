import React, { useEffect, useState } from 'react';
import Helmet from 'components/Helmet';
import HeroSlider from 'components/HeroSlider';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import heroSliderData from '../assets/fake-data/hero-slider';
import policy from 'assets/fake-data/policy';
import productData from 'assets/fake-data/products';
import PolicyCard from 'components/PolicyCard';
import Grid from 'components/Grid';
import { Link } from 'react-router-dom';
import ProductCard from 'components/ProductCard';
import banner from '../assets/images/banner.png';
import { useDispatch } from 'react-redux';
import { BASE_URL } from 'constant/config';
import { listProduct } from 'redux/actions/product.actions';

export default function Home() {
	const dispatch = useDispatch();
	const [listPopular, setListPopular] = useState([]);
	const [listTagNew, setListTagNew] = useState([]);
	const [listTagHot, setListTagHot] = useState([]);
	useEffect(() => {
		dispatch(listProduct());
	}, [dispatch]);
	useEffect(() => {
		const fetchdata = async () => {
			const res = await fetch(`${BASE_URL}products/list?limit=8&tag=popular`);
			const data = await res.json();
			setListPopular(data);
		};
		fetchdata();
	}, [dispatch]);
	useEffect(() => {
		const fetchdata = async () => {
			const res = await fetch(`${BASE_URL}products/list?limit=8&tag=new`);
			const data = await res.json();
			setListTagNew(data);
		};
		fetchdata();
	}, [dispatch]);
	useEffect(() => {
		const fetchdata = async () => {
			const res = await fetch(`${BASE_URL}products/list?limit=8&tag=hot`);
			const data = await res.json();
			setListTagHot(data);
		};
		fetchdata();
	}, [dispatch]);
	return (
		<Helmet title='Trang chủ'>
			{/* {hero slide} */}
			<HeroSlider
				data={heroSliderData}
				control={true}
				auto={true}
				timeOut={5000}
			/>
			{/* {end hero slide} */}
			{/* {Policy section} */}
			<Section>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{policy.map((item, index) => (
							<Link key={index} to='/policy'>
								<PolicyCard
									name={item.name}
									description={item.description}
									icon={item.icon}
								/>
							</Link>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* {End Policy section} */}
			{/* {best selling section} */}
			<Section>
				<SectionBody>
					<SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
					<SectionBody>
						<Grid col={4} mdCol={2} smCol={1} gap={20}>
							{listTagHot?.data?.items.map((item, index) => (
								<ProductCard key={index} product={item} />
							))}
						</Grid>
					</SectionBody>
				</SectionBody>
			</Section>
			{/* {end best selling section} */}
			{/* {new arrival section} */}
			<Section>
				<SectionBody>
					<SectionTitle>Sản phẩm mới</SectionTitle>
					<SectionBody>
						<Grid col={4} mdCol={2} smCol={1} gap={20}>
							{listTagNew?.data?.items.map((item, index) => (
								<ProductCard key={index} product={item} />
							))}
						</Grid>
					</SectionBody>
				</SectionBody>
			</Section>
			{/* {end new arrival section} */}
			{/* {banner} */}
			<Section>
				<SectionBody>
					<Link to='/catalog'>
						<img src={banner} alt='' />
					</Link>
				</SectionBody>
			</Section>
			{/* {end banner} */}

			{/* {popular product section} */}
			<Section>
				<SectionBody>
					<SectionTitle>Phổ biến</SectionTitle>
					<SectionBody>
						<Grid col={4} mdCol={2} smCol={1} gap={20}>
							{listPopular?.data?.items?.length
								? listPopular?.data?.items.map((item, index) => (
										<ProductCard key={index} product={item} />
								  ))
								: ''}
						</Grid>
					</SectionBody>
				</SectionBody>
			</Section>
			{/* {end popular product section} */}
		</Helmet>
	);
}
