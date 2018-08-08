import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import BackButton from '../../../../buttons/backButton';
import ListWork from '../list/listWork';
import styled from 'react-emotion';

const Span = styled('span')`
    font-size: 15px
`

export default class ShowWork extends Component{
    render(){
        return(
            <div className="body_margin">
                <Fragment>
                    <Grid container>
                        <Grid item xs="11">
                            <Typography>
                                <Span>Work 25 Jan, 2018</Span>
                            </Typography>
                        </Grid>

                        <Grid item xs="1">
                            <NavLink to="/work">
                                <BackButton/><br/>
                            </NavLink>
                        </Grid>
                    </Grid>

                    <ListWork />
                </Fragment>
            </div>
        );
    }
}