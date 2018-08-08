import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { css } from 'react-emotion';

const gridContainer = css`
    display: grid;
    grid-gap: 18px;
    grid-template-columns: auto auto auto auto auto auto;
    padding: 10px 0px;
`

const gridItem = css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 14px 0px;
    font-size: 17px;
    text-align: center;
    border-radius: 5px;
`

export default class ListDate extends Component{
    render(){
        return(
            <div>
                <div className="table_margin">
                    <Card>
                        <CardContent>
                            <Typography variant="headline" color="textSecondary" component="h2">
                                January
                            </Typography>

                            <div className={gridContainer}>
                                <NavLink to="/showWork">
                                    <div className={gridItem}>25 Jan, 2018</div>
                                </NavLink>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}