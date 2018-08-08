import React, { Component } from 'react';

export default class ChangeForm extends Component{
    render(){
        return(
            <form className="form_margin">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Old Password</label>

                        <div className="col-sm-4">
                            <input type="password" className="form-control" placeholder="Enter old password" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">New Password</label>

                        <div className="col-sm-4">
                            <input type="password" className="form-control" placeholder="Enter new password" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Confirm Password</label>

                        <div className="col-sm-4">
                            <input type="password" className="form-control" placeholder="Enter confirm password" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="col-sm-2 form-padding"></label>

                        <div className="col-sm-4">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}