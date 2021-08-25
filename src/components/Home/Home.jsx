import { Grid, makeStyles, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';
import ProductList from './ProductList';
import SideBar from './SideBar';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const  promotions = [
  {
    title:'Register on PUBG Poligon to a get free scin!',
    image:'https://cdn.midasbuy.com/images/1920x240f819d7a5.jpg'
  },
  {
    title:'Follow PUBG in Instagram to win your outfit!',
    image:'https://cdn.midasbuy.com/images/1440_30084385d12.jpg'
  },
  {
    title:'New RP! New scins!',
    image:'https://cdn.midasbuy.com/images/sbannerd753d140.png'
  }
]
const useStyles = makeStyles((theme) => ({
  root: {
  
  paddingTop: 20,
    backgroundColor:'#19234a',
    paddingBottom: 100,
    minHeight:'47vh'
  },
  boot:{
    flexWrap: 'nowrap',
  },
  img: {
    display: 'block',
     maxWidth: "1440px",
     overflow: 'hidden',
     minHeight:'300px',
     
   },
   carusel:{
     maxWidth: "150%",
     margin:'20px 0 50px 35px',
   },
   blockCar:{
     borderRadius:'20px',
     color:'white'
   }, 
}));

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = promotions.length;

  const classes = useStyles()
  const { getCart, cart } = useProducts()

  useEffect(() => {
    getCart()
  }, [])

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <Header />
    
    {/* <MainHeader/> */}
    <div className={classes.root}>
    <div className={classes.carusel}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {promotions ? (promotions.map((step, index) => (
          <div key={step.title} className={classes.blockCar}>
            {/* <Typography variant='h4' style={{textAlign:'center'}}>{step.title}</Typography> */}
            {Math.abs(activeStep - index) <= 2 ? (

              <img className={classes.img} src={step.image} alt={step.title} />
            ) : null}
          </div>
         ))): <Typography>Loading...</Typography>
      }
      </AutoPlaySwipeableViews>
      </div>
      <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
        <ProductList/>
        <SideBar />
      </Grid>
    </div>
    </>
  );
};

export default Home;