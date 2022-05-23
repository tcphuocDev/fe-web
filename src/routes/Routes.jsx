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

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/login' exact component={Login} />
			<Route path='/catalog/:slug' component={Product} />
			<Route path='/catalog' component={Catalog} />
			<Route path='/cart' component={Cart} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/return-policy' component={ReturnPolicy} />
		</Switch>
	);
};

export default Routes;
