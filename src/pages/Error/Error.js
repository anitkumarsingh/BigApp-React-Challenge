import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
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
        color:'white',
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.65),
          },
      },
})

const Error = ({classes}) =>{
    return(
        <>
         <Typography className={classes.title} variant="h6" noWrap>Please go back, session has expired  
            <span role="img" aria-label="Message">😢</span><br/><br/>
             <Link to={links.welcomeScreen()} style={{textDecoration:'none'}}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Take me back
                </Button>
            </Link>
         </Typography>
        </>
    )
}

export default withStyles(styles)(Error);