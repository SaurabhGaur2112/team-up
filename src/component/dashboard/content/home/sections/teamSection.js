import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../../../../assets/images/profile.png';
import { css } from 'react-emotion';

const gridContainer = css`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto auto auto;
    padding: 15px 0px;
`

const gridItem = css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 12px 0px;
    font-size: 18px;
    text-align: center;
    border-radius: 7px;
`

const gridProfile = css`
    height: 50px;
    width: 50px;
    margin: 0 auto;
    border-radius: 50%;
`
const imageSet = css`
    height: 50px;
    width: 50px;
`

export default class TeamSection extends Component{
    render(){
        return(
            <Card style={{marginTop: '30px'}}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        Team
                    </Typography>

                    <div className={gridContainer}>
                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <div className={gridItem}>
                                <div className={gridProfile}>
                                    <img src={profileIcon} alt="Profile" className={imageSet} />
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <span>Username</span>
                                </div>

                                <Typography variant="headline" component="h2">
                                    Profession
                                </Typography>
                            </div>
                        </NavLink>

                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <div className={gridItem}>
                                <div className={gridProfile}>
                                    <img src={profileIcon} alt="Profile" className={imageSet} />
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <span>Username</span>
                                </div>

                                <Typography variant="headline" component="h2">
                                    Profession
                                </Typography>
                            </div>
                        </NavLink>

                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <div className={gridItem}>
                                <div className={gridProfile}>
                                    <img src={profileIcon} alt="Profile" className={imageSet} />
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <span>Username</span>
                                </div>

                                <Typography variant="headline" component="h2">
                                    Profession
                                </Typography>
                            </div>
                        </NavLink>

                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <div className={gridItem}>
                                <div className={gridProfile}>
                                    <img src={profileIcon} alt="Profile" className={imageSet} />
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <span>Username</span>
                                </div>

                                <Typography variant="headline" component="h2">
                                    Profession
                                </Typography>
                            </div>
                        </NavLink>

                        <NavLink to="/" style={{textDecoration: 'none'}}>
                            <div className={gridItem}>
                                <div className={gridProfile}>
                                    <img src={profileIcon} alt="Profile" className={imageSet} />
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <span>Username</span>
                                </div>

                                <Typography variant="headline" component="h2">
                                    Profession
                                </Typography>
                            </div>
                        </NavLink>
                    </div>
                </CardContent>
            </Card>
        );
    }
}