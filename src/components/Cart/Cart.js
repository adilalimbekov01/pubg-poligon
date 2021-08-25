import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { Button, Container, Input, Modal, Typography } from '@material-ui/core';
import { useState } from 'react';
import Header from '../Header/Header';
import CreditCard from "../../credirCard/CreditCard"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCellImg: {
    width: 50,
  },
  paper: {
    backgroundColor:'#141b3d',
    position: 'absolute',
    minWidth: '800px',
    minHeight:'400px',
    border: '2px solid #000',
    borderRadius:'10px',
    marginLeft:'380px',
    marginTop:'100px',
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    color:'white'
  },
});

export default function Cart() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, buyProducts } = useProducts();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);

  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
    if (count < 1) {
      changeProductCount(count > 1, id);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    buyProducts()
  };

  return (
  <>
    <Header />
    <div style={{minHeight:'64vh'}}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>IMG</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>TITLE</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>PRICE</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>COUNT</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>SUBPRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products?.length > 0 &&
            cart.products.map((product) => (
              <TableRow key={product.item.id}>
                <TableCell>
                  <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                </TableCell>
                <TableCell align="right">{product.item.title}</TableCell>
                <TableCell align="right">{product.item.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    value={product.count}
                    onChange={(e) => handleCountChange(e.target.value, product.item.id)}
                  />
                </TableCell>
                <TableCell align="right">{product.subPrice}</TableCell>
              </TableRow>
            ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>Total:</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5">{cart.totalPrice}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Container style={{display:'flex', justifyContent:'flex-end'}}>
    <Button style={{color:'white', backgroundColor:'#141b3d', marginTop:'20px'}} onClick={() => handleOpen()}>Buy</Button>
    </Container>
              {open == true ? <Modal
  disablePortal
  disableEnforceFocus
  disableAutoFocus
  open
  aria-labelledby="server-modal-title"
  aria-describedby="server-modal-description"
  className={classes.modal}
>
  <div className={classes.paper}>
    <h2 id="server-modal-title">Enter info</h2>
    <CreditCard/>
    <Button style={{color:'#141b3d', backgroundColor:'white', margin:'40px 0'}} onClick={() => handleClose()}>Buy</Button>
  </div>
</Modal>: null}
    
    </div>
    </>
  );
}