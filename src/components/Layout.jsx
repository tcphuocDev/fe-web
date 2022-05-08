// @ts-nocheck
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routes from 'routes/Routes'
const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div>
          <div className="container">
            <Header {...props}/>
            <div className="main">
              <Routes/>
            </div>
          </div>
          <Footer/>
        </div>
      )}  />
    </BrowserRouter>
  )
}

export default Layout