import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductList from './ProductList';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
  
  paddingTop: 20,
  paddingBottom: 100,
  },
  boot:{
    flexWrap: 'nowrap',
  }
}));

const Home = () => {

  const classes = useStyles()
  const { getCart, cart } = useProducts()

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
        <SideBar />
        <ProductList/>
      </Grid>
    </div>
  );
};

export default Home;