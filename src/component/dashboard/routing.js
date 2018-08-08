import React from 'react';
import { Home, Team, Work, ChangePassword } from './content';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import AddTeam from '../dashboard/content/team/pages/addTeam';

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
                    <Route exact path="/dashboard" component={Home} />
                    <Route path="/team" component={Team} />
                    <Route path="/work" component={Work} />
                    <Route path="/change_password" component={ChangePassword} />

                    <Route path="/addTeam" component={AddTeam} />
                </div>
            </div>
        </main>
    );
}

export default withStyles(styles)(Routing);