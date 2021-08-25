import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';
import Header from '../Header/Header';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '0 auto',
    maxWidth: 800,
  },
  title: {
    textAlign: "center",
    color: "grey"
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    color: 'black'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textfield: {
    marginTop: 10
  }
}))


const AddProductPage = () => {
  const classes = useStyles()
  const { addProduct, history } = useProducts()

  const handleClick = async (product) => {
    const data = await addProduct(product)
    history.push('/home')
  }
  
  const [product, setProduct] = useState({
    title: '',
    type: '',
    image: '',
    description: '',
    price: 0,
    comment:[]
  })

  const handleInp = (e) => {
    console.log(product)
    let obj = {
      ...product,
      [e.target.name]: e.target.value
    }
    setProduct(obj)
  }

  return (
    <>
    <Header/>
    <div style={{backgroundColor:'#141b3d', padding:'40px 0'}}>
    <Paper elevation={3} className={classes.paper}>
      <h1 className={classes.title}>Add Product</h1>
      <Container className={classes.container}>
        <img width='330' src={product.image ? product.image : "https://img.icons8.com/windows/452/pubg.png"}/>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
          name="title"
          variant="outlined"
          label="Title"
          onChange={handleInp}
          className={classes.textfield}
          />
          <TextField
          name="description"
          variant="outlined"
          label="Description"
          onChange={handleInp}
          className={classes.textfield}
          />
          <TextField
          name="type"
          variant="outlined"
          label="Type"
          onChange={handleInp}
          className={classes.textfield}
          />
          <TextField
          name="image"
          variant="outlined"
          label="Image URL"
          onChange={handleInp}
          className={classes.textfield}
          />
          <TextField
          name="price"
          variant="outlined"
          label="Price"
          onChange={handleInp}
          className={classes.textfield}
          />
          <Container>
            <Button onClick={() => handleClick(product)}>
              <SaveIcon />
            </Button>
            <Button onClick={() => history.push('/home')}>
              <CancelIcon />
            </Button>
          </Container>
        </form>
      </Container>
    </Paper>
    </div>
    </>
  );
};

export default AddProductPage;