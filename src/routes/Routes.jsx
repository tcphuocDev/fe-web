import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Contact from 'pages/HomePage/Contact';
import ReturnPolicy from 'pages/HomePage/ReturnPolicy';
import Login from 'pages/Login';
import About from 'pages/HomePage/About';
import Checkout from 'pages/Checkout/Checkout';
import UserProfile from 'pages/UserProfile';
import EditProfileUser from 'pages/profile-page/EditProfileUser';
import OrderPageUser from 'pages/profile-page/Order';
import ChangePassword from 'pages/profile-page/ChangePassword';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/login' exact component={Login} />
			<Route path='/profile' exact component={UserProfile} />
			<Route path='/profile/edit' component={EditProfileUser} />
			<Route path='/profile/my-order' component={OrderPageUser} />
			<Route path='/profile/edit-password' component={ChangePassword} />
			<Route path='/catalog/:slug' component={Product} />
			<Route path='/catalog' component={Catalog} />
			<Route path='/cart' component={Cart} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/return-policy' component={ReturnPolicy} />
			<Route path='/checkout' component={Checkout} />
		</Switch>
	);
};

export default Routes;
