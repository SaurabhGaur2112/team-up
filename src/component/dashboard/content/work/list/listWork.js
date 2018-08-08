import React, { Component } from 'react';
import { workHeader } from '../../../store/tableStore';
import ViewButton from '../../../../buttons/viewButton';
import EditButton from '../../../../buttons/editButton';
import DeleteButton from '../../../../buttons/deleteButton';

export default class ListWork extends Component{
    render(){
        return(
            <table className="table table-striped table_margin">
                <thead>
                    <tr>
                        { workHeader.map((value) => <th className={value.tableWidth} key={value.id}>{value.label}</th>) }
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