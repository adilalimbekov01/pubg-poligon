import React from 'react';
import {
    FormControl,
    Grid,
    Paper,
    Typography,
    Container,
  } from "@material-ui/core";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import NavBar from './NavBar';
  

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginRight: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      minWidth: "170px",
      maxWidth: "300px",
      height: '100%'
    },
    typographys:{
        marginTop:'100px'
    },
    booter:{
        flexWrap:'nowrap',
        textAlign:'center'
    },
    type:{
        backgroundColor: 'red',
        height:'150px',
        margin:'20px auto',
        display:'flex',
        justifyContent:'space-around'
    },img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
      },
  }));
  
const Main = () => {
    const classes = useStyles();
    const { getProductsData, history } = useProducts()
    const [type, setType] = useState(getType())
    const [price, setPrice] = useState(getPrice())
  
    function getType(){
      const search = new URLSearchParams(history.location.search)
      return search.get('type')
    }
  
    function getPrice(){
      const search = new URLSearchParams(history.location.search)
      return search.get('price_lte')
    }
  
    const handleChangeType = (e) => {
      if(e.target.value == "all"){
        const search = new URLSearchParams(history.location.search)
        search.delete('type')
        history.push(`${history.location.pathname}?${search.toString()}}`)
        getProductsData()
        setType(e.target.value)
        return
      }
      const search = new URLSearchParams(history.location.search)
      search.set('type', e.target.value)
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setType(e.target.value)
    }
  
    const handleChangePrice = (e, value) => {
      console.log(value)
      const search = new URLSearchParams(history.location.search)
      search.set('price_lte', value)
      console.log(search)
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setPrice(value)
    }
  
    const resetPrice = () => {
      const search = new URLSearchParams(history.location.search)
      search.delete('price_lte')
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setPrice(getPrice())
    }
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
    return (
        <Grid container  spacing-md={4} spacing-sm={3} className={classes.booter}>
      <NavBar/>
      <Container style={{width:'100%', display:'flex', flexWrap:'wrap'}}>
      <Grid xs={11} className={classes.type}>
                <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                }
                />
        </Grid>
        <Grid xs={5} className={classes.type}>
            All Socks
        </Grid>
        <Grid xs={5} className={classes.type}>
            For men
        </Grid>
        <Grid xs={5} className={classes.type}>
            For weman
        </Grid>
        <Grid xs={5} className={classes.type}>
            For babys
        </Grid>
            <Typography variant='h3' style={{display:'block', margin:'20px auto'}}>About Us</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio hic iste, magni dolorem eos culpa voluptate, accusantium suscipit repellendus ratione saepe praesentium, porro nobis nulla quaerat obcaecati incidunt eaque?</Typography>
</Container>

      
      </Grid>
    );
};

export default Main;