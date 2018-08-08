import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AddButton from '../../../buttons/addButton';
import ListDate from './list/listDate';
import styled from 'react-emotion';

const Span = styled('span')`
    font-size: 15px
`

export default class Work extends Component{
    render(){
        return(
            <div className="body_margin">
                <Fragment>
                    <Grid container>
                        <Grid item xs="11">
                            <Typography>
                                <Span>Work</Span>
                            </Typography>
                        </Grid>

                        <Grid item xs="1">
                            <NavLink to="/addWork">
                                <AddButton/><br/>
                            </NavLink>
                        </Grid>
                    </Grid>

                    <ListDate />
                </Fragment>
            </div>
        );
    }
}