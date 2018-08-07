import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { css } from 'react-emotion';
import { ListItem, ListItemText, Divider, List } from '@material-ui/core';
import { homeTitle, storeTitle } from './store';
import { NavLink } from 'react-router-dom';

const drawerWidth = 200;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        'z-index': 1
    },
    toolbar: theme.mixins.toolbar,
});

class Leftbar extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Drawer
                variant="permanent"
                classes={{paper: classes.drawerPaper}}
            >
                <List style={{marginTop: '55px'}}>
                    { homeTitle.map((value) => <NavLink to={value.link} style={{textDecoration: 'none'}}><ListItem button key={value.id}>
                        <ListItemText primary={value.title}></ListItemText></ListItem></NavLink>) }
                </List>
                <Divider />

                <List>
                    { storeTitle.map((value) => <NavLink to={value.link} style={{textDecoration: 'none'}}><ListItem button key={value.id}>
                        <ListItemText primary={value.title}></ListItemText></ListItem></NavLink>) }
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Leftbar);