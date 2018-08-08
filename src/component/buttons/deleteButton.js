import React from 'react';
import { IconButton } from '@material-ui/core';

const DeleteButton = () => {
    return(
        <IconButton>
            <i className="fas fa-trash fa-sm" style={{'fontSize': '13px'}}></i>
        </IconButton>
    );
}

export default DeleteButton;