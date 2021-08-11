import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';


const ProductList = () => {
  const { productsData, getProductsData } = useProducts();
  useEffect(() => {
    getProductsData();
  }, []);

  const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const loadPosts = async() => {
        const res = await axios.get(`http://localhost:8000/products?_page=${page}`)
        setPosts(res.data)
    }
    
    useEffect(()=>{
        loadPosts()
    }, [page])

  // ======================================================
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [productsParPage, setProductsParPage] = useState(10)
  // ======================================================

  // useEffect(() => {
  //   console.log(productsData);
  // }, [productsData]);

  // =====================================================
  // useEffect(()=> {
  //   const getProducts = async () => {
  //     setLoading(true)
  //     const res = await axios.get('http://localhost:8000/products')
  //     setProducts(res.data)
  //     setLoading(false)
  //   }
    
  //   getProducts() 
  // }, [])

  return (
    <Grid container spacing={10} >
      {productsData ? (
        productsData.map((item) => (
          <Grid item>
            <ProductCard item={item}/>
          </Grid>
        ))
      ) : (
        <>
          <h1>...loading</h1>
        </>
      )},
      <Container component={Box} py={3}>
                <Pagination 
                    count={5} 
                    variant="outlined" 
                    color="secondary" 
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center"}}
                    showFirstButton={true}
                    showLastButton={true}
                    onChange={(e, val) => setPage(val)}
                    />
      </Container>
    </Grid>
  );
};

export default ProductList;