import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from 'routes/Routes';
import ProductViewModal from './ProductViewModal';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'redux/storeApp';
const Layout = (props) => {
	const store = useStore(props.initialReduxState);
	console.log('stroe', store);
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

								<Header {...props} />
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
