import React, { Component } from 'react';
import TodayWorkSection from './sections/todayWorkSection';
import TeamSection from './sections/teamSection';

export default class Home extends Component{
    render(){
        return(
            <div className="body_margin">
                <TodayWorkSection />
                <TeamSection />
            </div>
        );
    }
}