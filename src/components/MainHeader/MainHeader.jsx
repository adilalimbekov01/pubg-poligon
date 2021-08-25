import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useProducts } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',

    },
    height:'300px',
   
  },
  menuButton: {
    marginRight: theme.spacing(2),  
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      textDecoration:'none'
    },
    fontWeight:'bold'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  parg:{
    '&:hover': {
        color: "white",
      },
      '&:active': {
        color: "white",
      },
  }
}));

const MainHeader = () => {
  const classes = useStyles();
  const { history, getProductsData, cart } = useProducts();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/login" style ={{textDecoration: 'none'}}>
        <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
      </Link>
      <Link to="/reg" style={{textDecoration: "none"}}>
        <MenuItem onClick={handleMenuClose}>Зарегистрироваться</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton onClick={() => history.push('/addproduct')} aria-label="show 11 new notifications" color="inherit">
          <AddCircleIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{width:'100%', height:'100%', backgroundImage:"url('https://cdn.midasbuy.com/images/sbannerd753d140.png')", }}>
        <Toolbar style={{alignItems:'start', marginTop:'20px', display:'flex',justifyContent:'space-around', backgroundColor:'rgba(0, 0, 0, 0.6)', alignItems:'center'}}>
            
          <Link to="/home" style ={{textDecoration: 'none', color:'white'}}>
            <Typography className={classes.title} variant="h6" noWrap>
              PUBG Poligon
            </Typography>
          </Link>
         
         
         <div style={{marginLeft:'10px', display:'flex', justifyContent:'space-between', width:"30%" ,textDecoration:'none', }}>
         <p className={classes.parg}><Link to="/" style ={{textDecoration: 'none', color:'grey',}}>
              Home
          </Link>
          </p>
          <p className={classes.parg}><Link to="/home" style ={{textDecoration: 'none', color:'grey',}}>
              Products
          </Link>
          </p>
        <p className={classes.parg}><Link to="/contacts" style ={{textDecoration: 'none',  color:'grey'}}>
              Help center
          </Link>
          </p>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
    
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >

              <AccountCircle style={{color:'white', width:'100px', fontSize:"30px"}}/>

            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default MainHeader;