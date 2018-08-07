import React from 'react';
import { Home, Team, Work } from './content';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

const styles = theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

function Routing(props){
    const { classes } = props;
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/team" component={Team} />
                    <Route path="/work" component={Work} />
                </div>
            </div>
        </main>
    );
}

export default withStyles(styles)(Routing);