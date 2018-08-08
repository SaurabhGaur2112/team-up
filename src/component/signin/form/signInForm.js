import React, { Component } from 'react';

export default class SignInForm extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" style={{width: '300px'}} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Password:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-default">Submit</button> 
            </form>
        );
    }
}