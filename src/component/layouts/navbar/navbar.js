import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography, Toolbar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { css } from 'react-emotion';
import './navbar.css';

const typo = css`
    flex: 1;
    cursor: pointer;
`

export default class Navbar extends Component{
    render(){
        return(
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={typo}>
                        Dashboard
                    </Typography>
                    <IconButton
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}