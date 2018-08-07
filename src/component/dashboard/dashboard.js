import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../layouts/navbar/navbar';
import Leftbar from '../layouts/leftbar/leftbar';
import Routing from './routing';
import { HashRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

class Dashboard extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Navbar/>
                <HashRouter>
                    <Fragment>
                        <Leftbar />
                        <Routing />
                    </Fragment>
                </HashRouter>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);