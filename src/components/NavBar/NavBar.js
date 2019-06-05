import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';


const styles = theme =>({
    root: {
        flexGrow: 1,
        background:'#469DE8'
      },
     
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      
})

export default withStyles(styles)(({classes}) =>{
 return(
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
           React Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
 )
})