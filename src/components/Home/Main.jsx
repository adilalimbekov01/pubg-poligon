import React, { useState } from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';

import { Container, Grid } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';


import VideoHeader from '../MainHeader/VideoHeader';
import Header from '../Header/Header';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  boot:{
    backgroundColor:'#141b3d',
    flexWrap: 'wrap',
    width:'100%',
    minHeight: '60vh',
    display:'flex',
    alignItems:'center'
    
  },
  
  types:{
    width:'100%',
    flexWrap:'nowrap',
    display:'flex',
    justifyContent:'center',
    maxHeight:'100%',
    boxShadow: '0px 0px 15px 22px rgba(0,0,0,0.2)',
  },
  type:{
    width:'32%',
    height:'50px',
    margin:18,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    color:'black',
    fontSize:'25px',
    paddingLeft:'10px'
  },
  search:{
    display:'none'
  },
  content:{
    position:'relative',
    zIndex:'5',
  }
}));

 
const Main = () => {
  const classes = useStyles();
  
  const { productsData, getProductsData } = useProducts()

  

  return (
    <> 
    <VideoHeader/>
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.6)', width:'100%', zIndex:'5', position:"relative", opacity:'90%'}}>
    <Header/>
    </div>
    <div className={classes.content}>
    <div style={{width:'100%', height:'1px', backgroundColor:'white'}}></div>
    <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
    <Container>
      <Grid xs={12} className={classes.types}>
        
      <div className={classes.type} style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe0N3HHxsQFrx67AZqRsR0Zwb9TzlAqr7BQ&usqp=CAU")'}}>
            <Link to="/home" style={{textDecoration:'none', color:'black'}}>Buy UC</Link>
            <img width='100px'  src="https://cdn.midasbuy.com/images/activity/visacard/icon-ucs.png" alt="UC" />
        </div>
        
        <div  className={classes.type} style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VqqcXnYb6j9y4GwWvl5Q_cCoICx6-f-YDA&usqp=CAU")'}}>
        <Link to="/home?_limit=6&_page=1&type=ITEM-RP" style={{textDecoration:'none', color:'black'}}>ITEM-RP</Link>
        <img width='80px'  src="https://www.pubgmobile.com/ru/event/royalepass13/images/s3_role_icons.png" alt="RP" />


        </div>
        <div className={classes.type} style={{backgroundImage:'url("https://drasler.ru/wp-content/uploads/2019/05/%D0%9E%D0%B4%D0%BD%D0%BE%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%B9-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D1%88%D0%BE%D0%BF%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-025.jpg")'}}>
            <Link to="/aboutus" style={{textDecoration:'none', color:'black'}}>Promotions</Link>
        <img width='100px'  src="https://cdn.midasbuy.com/images/%E7%A9%BA%E6%8A%95%E7%AE%B1fca9cbf0.png" alt="RP" />
            
        </div>

        
      </Grid>
      
      </Container>
   
    </Grid>
    </div>
    
    </>
    
  );
};

export default Main;