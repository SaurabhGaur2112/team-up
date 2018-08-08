import React, { Component } from 'react';

export default class AddForm extends Component{
    render(){
        return(
            <form className="form_margin">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Date</label>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Assign</label>

                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Mobile Number" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Work</label>

                        <div className="col-sm-4">
                        <textarea class="form-control" rows="5" id="comment" placeholder="Enter Address" style={{resize: 'none'}}></textarea>
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