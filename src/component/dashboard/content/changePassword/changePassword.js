import React, { Component, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ChangeForm from './form/changeFrom';
import styled from 'react-emotion';

const Span = styled('span')`
    font-size: 15px
`

export default class ChangePassword extends Component{
    render(){
        return(
            <div className="body_margin">
                <Fragment>
                    <Grid container>
                        <Grid item xs="12">
                            <Typography>
                                <Span>Team</Span>
                            </Typography>
                        </Grid>
                    </Grid>

                    <ChangeForm/>
                </Fragment>
            </div>
        );
    }
}