import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import links from '../../utility/Links';

const styles = theme =>({
    root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
        textAlign:'center',
        padding:'50px 0 50px 0',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      button: {
        margin: theme.spacing(1),
        color:'white'
      },
      linkText:{
          textDecoration:'none'
      }
})

const Error = ({classes}) =>{
    return(
        <>
         <Typography className={classes.title} variant="h6" noWrap>Please go back 
             <span role="img" aria-label="Message">😢</span><br/><br/>
             <Link to={links.welcomeScreen()} className={classes.linkText}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Take me back
                </Button>
            </Link>
         </Typography>
        </>
    )
}

export default withStyles(styles)(Error);