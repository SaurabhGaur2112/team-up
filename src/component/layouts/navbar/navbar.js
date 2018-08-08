import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography, Toolbar } from '@material-ui/core';
import Logout from '../../dialog/logout';
import { css } from 'react-emotion';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const typo = css`
    flex: 1;
    cursor: pointer;
    font-weight: 600 !important;
`

export default class Navbar extends Component{
    render(){
        return(
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={typo}>
                        <NavLink to="/dashboard" style={{'textDecoration': 'none','color': '#fff'}}>Dashboard</NavLink>
                    </Typography>
                    <IconButton
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Logout />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}