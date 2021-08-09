import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
     boot:{
      flexWrap: 'nowrap',
      width:'100%'
    }
  }));
  

const AboutUs = () => {
  const classes = useStyles();

    return (
        <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
        <NavBar/>
        <div style={{textAlign:'center', marginTop: '20px', width:'80%'}}>
            <Typography variant='h2'>About Us</Typography>


            <img style={{margin:'20px 0'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEse_q51020GbfeO-5TRbf5OdvlQxFosDbg&usqp=CAU" alt="Factory" />
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis optio minima molestiae, quisquam aut, facilis et, neque laudantium eligendi consectetur nemo modi suscipit! Eum libero assumenda deleniti natus ad neque!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis optio minima molestiae, quisquam aut, facilis et, neque laudantium eligendi consectetur nemo modi suscipit! Eum libero assumenda deleniti natus ad neque!</Typography>
        </div>
        </Grid>
    );
};

export default AboutUs;