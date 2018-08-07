import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { css } from 'react-emotion';
import { ListItem, ListItemText, Divider } from '@material-ui/core';

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
                <ListItem style={{marginTop: '50px'}}>
                    <ListItemText>Home</ListItemText>
                </ListItem>

                <Divider />
            </Drawer>
        );
    }
}

export default withStyles(styles)(Leftbar);