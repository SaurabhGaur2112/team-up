import React from 'react';
import Button from '@material-ui/core/Button';

const BackButton = () => {
    return(
        <Button size="small" variant="raised" color="secondary" className="buttonFont buttonPosition">
            <i className="fas fa-arrow-left" style={{fontSize: '18px'}}></i>
            &nbsp;Back
        </Button>
    );
}

export default BackButton;