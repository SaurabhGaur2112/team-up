import React, { Component } from 'react';

export default class AddForm extends Component{
    render(){
        return(
            <form className="form_margin">
                <div className="col-sm-12 form-padding">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Name</label>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-padding form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Mob. No.</label>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Mobile Number" />
                        </div>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Mobile Number" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-padding form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Profession</label>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-padding form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Address</label>

                        <div className="col-sm-4">
                        <textarea class="form-control" rows="5" id="comment" placeholder="Enter Address" style={{resize: 'none'}}></textarea>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-padding form-margin">
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