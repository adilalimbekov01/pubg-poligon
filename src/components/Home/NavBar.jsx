import React from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import { useProducts } from "../../contexts/ProductContext";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      
      margin:'0 20px 20px 20px',
      width:'300px',
      height: '100%',
      minHeight:'250px',
      // backgroundColor:'#ffab91',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    color: 'black',

    },
    typographys:{
      margin:'20px 0',  
    color: 'white',
      
  },
  pages:{
    borderRadius: theme.shape.borderRadius,
    position:'reletive',
    display:'flex',
    justifyContent:"space-around",
    border:'3px solid #ffab91',
    borderRadius:'100px',
    margin:'10px 0',
    backgroundColor:'#ffab91',
    color:'white',
    width:'100px',
    marginTop:'20px',
    
  }, 
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
  
    return (
      <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
      <Link to="/aboutus" style={{textDecoration:'none'}}>   <div className={classes.pages}>About Us</div></Link>
      <Link to="/home" style={{textDecoration:'none'}}>   <div className={classes.pages}>List</div></Link>
      <Link to="/contacts" style={{textDecoration:'none'}}>   <div className={classes.pages}>Contacts</div></Link>
     </div>
    );
  };
  
  export default NavBar;