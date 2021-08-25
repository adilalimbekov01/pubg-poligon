import { Grid, Button,makeStyles, TextField, Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { JSON_API_PRODUCTS } from '../helpers/consts';
import { useAuth } from '../contexts/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import CommentCard from './CommentCard'
import { useContext } from 'react';
import { productContext } from '../contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
    commentAll:{
        margin:'30px 0'
    },
    comentWindow: {
        borderRadius:"15px",
        width: 600,
        height: 300,
        border: 'solid 2px #141b3d',
        padding: 10,
        overflow: 'scroll'
    },
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    input: {
        width: 500,
         
        color:'#141b3d'
    },
    form:{
        backgroundColor:"#141b3d",
        color:'white',
        marginLeft:'10px'
        
    }
}))
const Comments = () => {
    const classes = useStyles()
    const {currentUser} = useAuth()
    const { getProductsData, productDetails, getProductDetails, } = useContext(productContext)
    const [value, setValue] = useState('')
    const {id} = useParams()
    const history = useHistory()
    const [product, setProduct] = useState('')
    const [coment, setComent] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,
            user: currentUser.email
        }
        setComent(coment)
        setValue(e.target.value)
    }
    useEffect(()=> {
        getProductDetails(id)
    },[])
    console.log(productDetails)
    const addComent = async(id) => {
        console.log(id)
        productDetails.comment.push(coment)
        setProduct(productDetails)
        const data = await axios.patch(`${JSON_API_PRODUCTS}/${id}`,product)
        getProductsData(history)
        setValue('')
    }
        
    return (
        <>
       <Container className={classes.commentAll}>
        <Grid container justify="center">
            <Grid className={classes.comentWindow}>
            {productDetails.comment ? (productDetails.comment.map((item) => (
                <CommentCard item={item}/>
            ))
            ) : (
                <div className={classes.root}>
                <CircularProgress color="secondary" />
                {console.log('errer')}
              </div>
            )}
            </Grid>
        </Grid>
        <Grid container style={{margin:'10px 0'}} display='flex' justifyContent='center'>
            <TextField value={value}className={classes.input} onChange={handleInp}/>
            <Button className={classes.form} onClick={() => addComent(id)}>Send</Button>
        </Grid>

          </Container>
        </>
    );
};

export default Comments;