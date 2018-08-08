import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { workHeader } from '../../../store/tableStore';

export default class TodayWorkSection extends Component{
    render(){
        return(
            <Card>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        Today Work (25 Jan, 2018)
                    </Typography>

                    <table className="table table-striped table_margin">
                        <thead>
                            <tr>
                                { workHeader.map((value) => <th className={value.tableWidth} key={value.id}>{value.label}</th>) }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>amsn</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>amsn</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>amsn</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        );
    }
}