import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useProducts } from '../../contexts/ProductContext';
import { ShoppingCart } from '@material-ui/icons';
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
    // border:'2px solid white'
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
  search: {
    position: 'relative',
    color:'white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '500px',
      
    },
    border:"1px solid white",
    borderRadius:'15px'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color:'white'
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
  
}));

const Header = () => {
  const classes = useStyles();
  const { history, getProductsData, cart } = useProducts();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set('q', e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
  };

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
      <Link to="/login" style ={{textDecoration: 'none', color:'black'}}>
        <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
      </Link>
      <Link to="/reg" style={{textDecoration: "none", color:'black'}}>
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
    <>
    
    <div className={classes.grow}>
    <span style={{width:'100%', height:'1px', backgroundColor:'white'}}></span>
      <AppBar position="static" style={{backgroundColor:'#141b3d', color:'white'}}>
        <Toolbar style={{ display:'flex',justifyContent:'space-around'}}>
          <Link to="/" style ={{textDecoration: 'none', color:'white'}}>
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleValue(e)}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Link to="/cart" style ={{textDecoration: 'none',color:'white'}}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={cart.products ? cart.products.length : 0} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              onClick={() => history.push('/addproduct')}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <AddCircleIcon style={{color:'white'}}/>
            </IconButton>
            <IconButton
    
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >

              <AccountCircle style={{color:'white'}}/>

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
    <span style={{width:'100%', height:'1px', backgroundColor:'white'}}></span>
    </div>
    </>
  );
};

export default Header;