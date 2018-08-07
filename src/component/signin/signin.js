import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { css } from 'react-emotion';
import SignInForm from './form/signInForm';

const signIn = css`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 270px;
    width: 350px;
`

export default class Signin extends Component{
    render(){
        return(
            <div>
                <Card className={signIn}>
                    <CardContent>
                        <Typography>
                            Sign In
                        </Typography>   
                        <SignInForm />
                    </CardContent>
                </Card>
            </div>
        );
    }
}