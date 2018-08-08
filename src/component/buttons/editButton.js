import React from 'react';
import { IconButton } from '@material-ui/core';

const EditButton = () => {
    return(
        <IconButton>
            <i className="fas fa-pen fa-sm" style={{'fontSize': '13px'}}></i>
        </IconButton>
    );
}

export default EditButton;