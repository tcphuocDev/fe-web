import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from 'routes/Routes';
import ProductViewModal from './ProductViewModal';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'redux/storeApp';
import { getFromLocal } from 'common/local-storage';
const Layout = (props) => {
	const store = useStore(props.initialReduxState);
	const [totalProduct, setTotalProduct] = useState();
	const [user, setUser] = useState([]);
	const [changeUser, setChangeUser] = useState(false);
	useEffect(() => {
		setTotalProduct(
			getFromLocal('cart')?.reduce(
				(total, item) => total + item.version.currentQuantity,
				0,
			),
		);
	}, [getFromLocal('cart')]);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, [changeUser]);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route
					render={(props) => (
						<div>
							<div className='container'>
								<ToastContainer
									draggable={false}
									transition={Zoom}
									autoClose={3000}
								/>

								<Header
									{...props}
									user={user}
									changeUser={changeUser}
									setChangeUser={setChangeUser}
								/>
								<div className='main'>
									<Routes />
								</div>
							</div>
							<Footer />
							<ProductViewModal />
						</div>
					)}
				/>
			</BrowserRouter>
		</Provider>
	);
};

export default Layout;
