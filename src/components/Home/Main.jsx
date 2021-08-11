import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import NavBar from './NavBar'
import { Grid } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    marginTop:'20px'
  },
  img: {
    height: '350px',
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
  },
   boot:{
    flexWrap: 'nowrap',
    width:'100%'
  },
  carusel:{
    width:'60%',
    marginTop:'20px',
    margin :'0 auto'
  },
  blockCar:{
    border: "2px solid white",
    borderRadius:'15px',
    backgroundColor:'#ffab91',
    color:'white'
  }

}));

 
const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { productsData, getProductsData } = useProducts()
  const maxSteps = productsData.length;

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  console.log(productsData);

  return (
    <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
    <NavBar/>
    <div className={classes.carusel}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {productsData ? (productsData.map((step, index) => (
          <div key={step.title} className={classes.blockCar}>
            <Typography variant='h4' style={{textAlign:'center'}}>{step.title}</Typography>
            {Math.abs(activeStep - index) <= 2 ? (
              
              <img className={classes.img} src={step.image} alt={step.title} />
            ) : null}
          </div>
         ))): <Typography>Loading...</Typography>
      }
      </AutoPlaySwipeableViews>
      </div>
    </Grid>
  );
};

export default Main;