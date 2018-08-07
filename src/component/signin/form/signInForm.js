import React, { Component } from 'react';

export default class SignInForm extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" style={{width: '300px'}} />
                </div>

                <div className="form-group">
                    <label for="email">Password:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter password" />
                </div>

                <button type="submit" class="btn btn-default">Submit</button> 
            </form>
        );
    }
}