import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../../src/navlogo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color : 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


  export default function Navbar() {

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{background : "#323232"}}>
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logo} atl="logo" style={{width : "40px" , height : "40px"}}></img>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Keyboard Shortcut Validator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

