import React, { Component } from 'react';

export default class AddForm extends Component{
    render(){
        return(
            <form className="form_margin">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Date</label>

                        <div className="col-sm-4">
                            <div className="input-group date" data-date-format="dd.mm.yyyy">
                                <input type="text" className="form-control" placeholder="dd.mm.yyyy" />
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-th"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Assign</label>

                        <div className="col-sm-4">
                            <select className="form-control">
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="control-label col-sm-2 form-padding">Work</label>

                        <div className="col-sm-4">
                        <textarea className="form-control" rows="5" id="comment" placeholder="Enter Work" style={{resize: 'none'}}></textarea>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 form-margin">
                    <div className="form-group">
                        <label className="col-sm-2 form-padding"></label>

                        <div className="col-sm-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>

            </form>
        );
    }
}