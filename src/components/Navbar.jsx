import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>BLOGAPP</Typography>
        <Button component={Link} to="/home" color="inherit">Home</Button>
        <Button component={Link} to="/form" color="inherit">addblog</Button>
      </Toolbar>
    </AppBar>
  );
  }
export default Navbar;