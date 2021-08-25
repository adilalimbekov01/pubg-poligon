import {
    Radio,
    FormControl,
    Grid,
    RadioGroup,
    FormControlLabel,
    Slider,
    Container,
  } from "@material-ui/core";
  import React from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import { useProducts } from "../../contexts/ProductContext";
  import { useState } from "react";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin:'0 20px 20px 20px',
      minWidth: "170px",
      maxWidth: "300px",
      height: '100%',
      minHeight:'250px',
      color: 'black',
    },
    typographys:{
      marginTop:'20px',  
    color: 'white',
      
  },
  pages:{
    borderRadius: theme.shape.borderRadius,
    position:'reletive',
    display:'flex',
    alignItem:'flex-start',
    justifyContent:"space-around",
    border:'2px solid #ffab91',
    borderRadius:'100px',
    margin:'10px 0',
    color:'black'
  },
  }));
  
  const SideBar = () => {
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
      <Grid item md={3}  >
          <Container style={{boxShadow:' 0px 0px 30px 10px #141b3d', width:'75%',  marginTop:'7px',borderRadius:'10px', textAlign:'center', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

          <FormControl component="fieldset">         
            <RadioGroup value={type} onChange={handleChangeType} style={{color:'secondary'}} >
              <Container style={{color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', minHeight:'200px', margin:'10px auto'}}>
              <FormControlLabel
                value="UC"
                control={<Radio />}
                label="UC"
                style={{ borderRadius:'10px', display:'flex', alignItems:'center', width:'110%', backgroundColor:'#252f56', marginTop:"15px"}}
              />
              <FormControlLabel
                value="ITEM-RP"
                control={<Radio />}
                label="ITEM-RP"
                style={{ borderRadius:'10px', display:'flex', alignItems:'center', width:'110%', backgroundColor:'#252f56',}}
              />
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All Products"
                style={{ borderRadius:'10px', display:'flex', alignItems:'center', width:'110%', backgroundColor:'#252f56',}}
              />
              </Container>
            </RadioGroup>
          </FormControl>
         
          <Grid>
            <Slider
            value={price}
            onChange={handleChangePrice}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            style={{color:'white'}}
            min={35}
            max={7490}
            />
            <button onClick={resetPrice} variant="outlined" style={{color: "white", border: '2px solid white', width:'180px', height:'40px', fontSize:"20px", borderRadius:'10px', marginBottom:"20px",marginLeft:"-14px", backgroundColor:'inherit'}} >Reset price</button>
          </Grid>
          </Container>
      </Grid>
    );
  };
  
  export default SideBar;