import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useHistory } from 'react-router';
import { ACTIONS, JSON_API_PRODUCTS, PRODUCT_LIMIT } from '../helpers/consts';
import { calcSubPrice, calcTotalPrice } from '../helpers/functions';


export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsData: [],
  productDetails: {},
  cart: [],
  pages: 1,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state, productsData: action.payload.data,
        pages: Math.ceil(action.payload.headers['x-total-count'] / PRODUCT_LIMIT)
      };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
      case ACTIONS.GET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getProductsData = async () => {
    const search = new URLSearchParams(history.location.search);
    search.set('_limit', PRODUCT_LIMIT)
    history.push(`${history.location.pathname}?${search.toString()}`);
    const res = await axios(`${JSON_API_PRODUCTS}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res,
    });
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const addProduct = async (product) => {
    const data = await axios.post(JSON_API_PRODUCTS, product);
    getProductsData();
  };

  const deleteProduct = async (id) => {
    const data = await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProductsData();
  };

  const saveEditedProduct = async (id, editedProduct) => {
    const data = await axios.patch(`${JSON_API_PRODUCTS}/${id}`, editedProduct);
    history.push('/home');
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const buyProducts = () =>{
    localStorage.clear()
  }
  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    console.log(newProduct);

    let productToFind = cart.products.filter((item) => item.item.id === product.id);
    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter((item) => item.item.id !== product.id);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const addProductToFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    console.log(newProduct);

    let productToFind = favorites.products.filter((item) => item.item.id === product.id);
    if (productToFind.length == 0) {
      favorites.products.push(newProduct);
    } else {
      favorites.products = favorites.products.filter((item) => item.item.id !== product.id);
    }
    favorites.totalPrice = calcTotalPrice(favorites.products);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    dispatch({
      type: ACTIONS.GET_FAVORITES,
      payload: favorites,
    });
  };

  const values = {
    history,
    productsData: state.productsData,
    productDetails: state.productDetails,
    cart: state.cart,
    favorites: state.favorites,
    pages: state.pages,
    getProductsData,
    getProductDetails,
    deleteProduct,
    addProduct,
    saveEditedProduct,
    getCart,
    addProductToCart,
    changeProductCount,
    buyProducts,
    addProductToFavorites,
  };

  return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductContextProvider;
