import {
    Grid,
    Container,
    Typography,
    Paper,
    FormControl
  } from "@material-ui/core";
  import React from "react";
  import { makeStyles, alpha } from "@material-ui/core/styles";
  import { useProducts } from "../../contexts/ProductContext";
  import { useState } from "react";
  import HomeIcon from '@material-ui/icons/Home';
  import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
  import PersonIcon from '@material-ui/icons/Person';
  import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Link } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      
      margin:'0 20px 20px 20px',
      minWidth: "170px",
      maxWidth: "300px",
      height: '120%',
      minHeight:'250px',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
     

    },
    typographys:{
      margin:'50px 0',
      position:'relative',
      
  },
  pages:{
    borderRadius: theme.shape.borderRadius,
    position:'reletive',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  }
  }));
  
  const NavBar = () => {
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
  
    return (
      <Grid item md={3} style={{marginTop:'20px'}} >
        <Paper elevation={2} className={classes.paper}>
          <Container style={{position:'fixed', width:'250px', textAlign:'start'}}>
          <FormControl component="fieldset">
            <Container className={classes.typographys}>
            <Link to='/' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <div className={classes.pagesIcon}> 
              <HomeIcon/>
              </div>
              <Typography variant = 'h6'> Home</Typography>
              </div>
            </Link>
            <Link to='/aboutus' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <SupervisorAccountIcon/><Typography variant = 'h6'>About Us</Typography>
              </div>
            </Link>
            <Link to='/profile' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <PersonIcon/>
              <Typography variant = 'h6'>Profile</Typography>
              </div>
            </Link>
            <Link to='/contacts' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <ContactSupportIcon/><Typography variant = 'h6'>Contacts</Typography>
              </div>
            </Link>
            </Container>
          </FormControl>
         
          <Grid>
          </Grid>
          </Container>
        </Paper>
      </Grid>
    );
  };
  
  export default NavBar;