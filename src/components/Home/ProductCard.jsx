import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { useProducts } from '../../contexts/ProductContext';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarIcon from '@material-ui/icons/Star';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    minHeight: '420px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBGiGbxiKHIJMXYxYWIdce8CgKYHsJpdYAw&usqp=CAU")',
    color:'white'
  },
  media: {
    width:'188px',
    height:'148px',
    margin:'0 auto' 
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardActionsContainer: {},
  icons:{
    display:'flex',
    justifyContent: 'space-around',
    height: 50,
    
  }
}));

const ProductCard = ({ item }) => {

  const classes = useStyles();

  const { deleteProduct, history, addProductToCart, cart, addProductToFavorites, favorites } = useProducts();

  const [expanded, setExpanded] = React.useState(false);

  const checkItemInCart = (id) => {
    const foundItem = cart?.products?.find((product) => product.item.id === id);
    return foundItem ? 'secondary' : 'default';
  };
  const checkItemInFavorites = (id) => {
    console.log(id);
    const foundFav = favorites?.products?.find((product) => product.item.id == id);
    return foundFav ?  'primary' : 'default';
  };

 

  return (
    <Card className={classes.root} >
      <CardHeader
        title={<p style={{display:'flex', alignItems:'center', justifyContent:"center"}}>{item.title}<img src="https://cdn.midasbuy.com/images/apps/pubgm/24_24d2c7b78c.png" alt="UC" width='30px'/></p>}/>
        
          <Container>
            
            </Container>
      <NavLink to={`/details/${item.id}`}>
        <CardMedia className={classes.media} image={item.image} title="PUBG Cash" />
      </NavLink>
      
        <Container style={{margin:'20px 0'}}>

          <button style={{width:'100%', height:'40px',backgroundColor:'#141b3d', border:'none'  }}><Box component="span" m={1} style={{color:'white', fontSize:'20px', fontWeight:'bold'}}>
            {item.price} $
          </Box></button>
          
        </Container>
        <Container className={classes.icons}>
          <IconButton
          color={checkItemInFavorites(item.id)}
          onClick={() => addProductToFavorites(item)}
          aria-label="add to favorites">
          
            <StarIcon />
          </IconButton>
          <IconButton
            backgroundColor={checkItemInCart(item.id)}
            onClick={() => addProductToCart(item)}
            aria-label="add to favorites"
          >
            <AddShoppingCartIcon style={{color:'white'}}/>
          </IconButton>
          <IconButton onClick={() => history.push(`/edit/${item.id}`)}>
            <EditIcon style={{color:'white'}}/>
          </IconButton>
          <IconButton aria-label="share" onClick={() => deleteProduct(item.id)}>
            <DeleteIcon style={{color:'white'}} />
          </IconButton>
        </Container>
      
    </Card>
  );
};

export default ProductCard;
