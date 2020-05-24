import React, { Component } from 'react';
import './Adverts.scss';
import { withRouter } from 'react-router-dom';

class Adverts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plaats:'',
            minprijs:'',
            maxprijs:'',
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        
    }
    
    render() {
        return (
            <div className="col-lg-2" id="filter">
                <div className="card">
                    <header className="card-header">
                        <h6 className="title">Filter:</h6>
                    </header>
                    <article className="card-group-item">
                        <div className="filter-content">
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Min</label>
                                        <input type="number" className="form-control" id="inputEmail4" placeholder="€ 0"></input>
                                    </div>
                                    <div className="form-group col-md-6 text-right">
                                        <label>Max</label>
                                        <input type="number" className="form-control" placeholder="€100"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <article className="card-group-item">
                        <div className="filter-content">
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Woonplaats:</label>
                                        <input type="number" className="form-control" id="inputEmail4" placeholder=""></input>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </article>
                    <article className="card-group-item">
                        <div className="filter-content">
                            <div className="card-body">
                                <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">52</span>
                                    <input type="checkbox" className="custom-control-input" id="Check1"></input>
                                    <label className="custom-control-label" htmlFor="Check1">Samsung</label>
                                </div>

                                <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">132</span>
                                    <input type="checkbox" className="custom-control-input" id="Check2"></input>
                                    <label className="custom-control-label" htmlFor="Check2">Black berry</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">17</span>
                                    <input type="checkbox" className="custom-control-input" id="Check3"></input>
                                    <label className="custom-control-label" htmlFor="Check3">Samsung</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">7</span>
                                    <input type="checkbox" className="custom-control-input" id="Check4"></input>
                                    <label className="custom-control-label" htmlFor="Check4">Other Brand</label>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

        );
    }
}
export default withRouter(Adverts);