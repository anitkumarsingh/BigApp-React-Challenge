import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import links from '../../utility/Links';
import userInfo from '../../utility/UserInfo';
import Avatar from '@material-ui/core/Avatar';
import {Redirect} from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

const styles = theme =>({
  grow: {
    flexGrow: 1,
  },
  root: {
      flexGrow: 1,
    },
  title: {
    flexGrow: 1,
    display: 'none',
    color:'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  accountIconColor:{
    fill:'white'
  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 40,
    height: 'auto',
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
      
})

export default withStyles(styles)(({classes}) =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleSessionCleanUp() {
    sessionStorage.clear();
    document.location.reload(true);
   return <Redirect to={'/'}/>
  }
  function handleMenuClose(){
    setAnchorEl(null);
    handleMobileMenuClose();
  }
 
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
      <MenuItem onClick={handleMenuClose}><AccountCircle/> {userInfo.getUserName()}</MenuItem>
      <MenuItem onClick={handleMenuClose}><MailIcon /> {userInfo.getUserEmail()}</MenuItem>
      <MenuItem onClick={handleSessionCleanUp}><Switch aria-label="LoginSwitch"/>Log out</MenuItem>
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
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

 return(
    <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar>
          <div className={classes.root}>
          <Link to={links.welcomeScreen()} style={{textDecoration:'none'}}>
            <Typography className={classes.title} variant="h6" >
              React Coding Challenge
            </Typography>
          </Link>
          </div>
          {userInfo.checkUser() 
          ? (
            <>
             <div>
              <Link to={links.dragNdrop()} style={{textDecoration:'none'}}>
                <Typography className={classes.title} variant="h6" >
                  Drag & Drop
                </Typography>
              </Link>
            </div>
            <div>
              <IconButton
                  edge="end"
                  aria-label="Account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {userInfo.checkUser 
                    ?(<Avatar alt={userInfo.getUserName()} src={userInfo.getUserPic()} 
                      className={classes.bigAvatar} />
                    )                  
                    :(<AccountCircle className={classes.accountIconColor}/>)}
                </IconButton>
            </div>
            </>
          ):(' ')}
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
 )
})

