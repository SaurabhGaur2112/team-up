import React from 'react';
import { IconButton } from '@material-ui/core';

const ViewButton = () => {
    return(
        <IconButton>
            <i className="fas fa-eye fa-sm" style={{'fontSize': '13px'}}></i>
        </IconButton>
    );
}

export default ViewButton;