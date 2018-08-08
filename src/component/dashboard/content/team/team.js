import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AddButton from '../../../buttons/addButton';
import ListTeam from './list/listTeam';
import styled from 'react-emotion';

const Span = styled('span')`
    font-size: 15px
`

export default class Team extends Component{
    render(){
        return(
            <div className="body_margin">
                <Fragment>
                    <Grid container>
                        <Grid item xs="11">
                            <Typography>
                                <Span>Team</Span>
                            </Typography>
                        </Grid>

                        <Grid item xs="1">
                            <NavLink to="/teamAdd">
                                <AddButton/><br/>
                            </NavLink>
                        </Grid>
                    </Grid>

                    <ListTeam/>
                </Fragment>
            </div>
        );
    }
}