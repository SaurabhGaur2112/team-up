import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import BackButton from '../../../../buttons/backButton';
import AddForm from '../form/addForm';
import styled from 'react-emotion';

const Span = styled('span')`
    font-size: 15px
`

export default class AddWork extends Component{
    render(){
        return(
            <div className="body_margin">
                <Fragment>
                    <Grid container>
                    <Grid item xs="11">
                            <Typography>
                                <Span>Team Add</Span>
                            </Typography>
                        </Grid>

                        <Grid item xs="1">
                            <NavLink to="/team">
                                <BackButton/><br/>
                            </NavLink>
                        </Grid>
                    </Grid>

                    <AddForm />
                </Fragment>
            </div>
        );
    }
}