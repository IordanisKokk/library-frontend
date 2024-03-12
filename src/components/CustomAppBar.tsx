import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AutoStories, AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Typography, Menu, MenuItem, Avatar } from '@mui/material';

const pages = ['Books', 'Genres', 'Authors'];

function CustomAppBar({ onPageChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Example state for user authentication
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {

    set

    setLoggedIn(true);
    handleMenuClose();
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear authentication state)
    setLoggedIn(false);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ background: '#fff', boxShadow: 'none', borderBottom: '1px solid #f1f1f1' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bolder' }} to="/">
          <IconButton sx={{ color: '#333' }} onClick={() => navigate('/')}>
            <AutoStories />
            <Typography sx={{ margin: '0 0.25rem 0 1rem ' }} variant="h4" fontWeight={550}>
              Library{' '}
            </Typography>
            <Typography sx={{}} variant="h6" fontWeight={550}>
              of great books
            </Typography>
          </IconButton>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pages.map((page) => (
            <Link
              style={{ textDecoration: 'none', color: '#333', fontWeight: 'bolder', marginRight: '20px' }}
              key={page}
              to={`/${page}`}
            >
              <Button key={page} onClick={() => onPageChange(page)} color="inherit">
                <Typography variant="button" fontSize={'14pt'} fontWeight={550}>
                  {page}
                </Typography>
              </Button>
            </Link>
          ))}
          {loggedIn ? (
            <div>
              <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                sx={{ color: '#333', width: '2rem', height: '2rem' }}
              >
                <Avatar 
                    sx={{ width: '2rem', height: '2rem', backgroundColor: '#e6b25e' }}
                >
                    U
                </Avatar>
              </IconButton>
              <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => console.log('clicked on profile')}>Profile</MenuItem>
                <MenuItem onClick={() => {console.log('clicked on settings')}}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton aria-label="login" 
                sx={{ color: '#333', width: '2rem', height: '2rem' }}
                onClick={handleLogin}>
              <AccountCircle />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
