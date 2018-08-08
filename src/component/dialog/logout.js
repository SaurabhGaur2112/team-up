import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, Button, DialogTitle, IconButton } from '@material-ui/core';

export default class Logout extends Component{
    constructor(prop){
        super(prop);

        this.state = {
            open: false
        };
    }

    handleLogout = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return(
            <div>
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleLogout}
                >
                    <i className="fas fa-power-off"></i>
                </IconButton>

                <Dialog 
                    open={this.state.open}
                    onClose={this.handleLogout}
                >
                    <DialogTitle>Are you sure you want to Logout?</DialogTitle>

                    <DialogActions>
                        <Button onClick={this.handleLogout} color="primary">Cancel</Button>

                        <Button onClick={this.handleLogout} color="primary" autoFocus>Exit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}