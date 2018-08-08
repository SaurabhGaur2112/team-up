import React, { Component } from 'react';
import { teamHeader } from '../../../store/tableStore';
import ViewButton from '../../../../buttons/viewButton';
import EditButton from '../../../../buttons/editButton';
import DeleteButton from '../../../../buttons/deleteButton';

export default class ListTeam extends Component{
    render(){
        return(
            <table className="table table-striped table_margin">
                <thead>
                    <tr>
                        { teamHeader.map((value) => <th className={value.tableWidth} key={value.id}>{value.label}</th>) }
                        <th className="col-sm-2" style={{textAlign: 'center'}}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>amsn</td>
                        <td></td>
                        <td></td>
                        <td>
                            <center>
                                <ViewButton/>
                                <EditButton/>
                                <DeleteButton/>
                            </center>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>amsn</td>
                        <td></td>
                        <td></td>
                        <td>
                            <center>
                                <ViewButton/>
                                <EditButton/>
                                <DeleteButton/>
                            </center>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>amsn</td>
                        <td></td>
                        <td></td>
                        <td>
                            <center>
                                <ViewButton/>
                                <EditButton/>
                                <DeleteButton/>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}