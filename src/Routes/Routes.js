import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import Contacts from '../components/Home/Contacts';
import Footer from '../components/Footer/Footer';
import ResetPassword from '../components/Auth/ResetPassword';

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reg" component={Registration} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addproduct" component={AddProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details/:id" component={ProductDetails} />
          <Route exact path="/edit/:id" component={EditProductPage} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/resetpass" component={ResetPassword} />
        </Switch>
        <Footer />
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
