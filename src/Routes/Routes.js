import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ProductContextProvider from './../contexts/ProductContext';
import ProductDetails from './../components/Home/ProductDetails';
import AddProductPage from './../components/Admin/AddProductPage';
import EditProductPage from './../components/Admin/EditProductPage';
import Cart from '../components/Cart/Cart';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';
import Main from '../components/Home/Main';
import AboutUs from '../components/Home/AboutUs';

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addproduct" component={AddProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details/:id" component={ProductDetails} />
          <Route exact path="/edit/:id" component={EditProductPage} />
          <Route exact path='/aboutus' component={AboutUs}/>
        </Switch>
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
