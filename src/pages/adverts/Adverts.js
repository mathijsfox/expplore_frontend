import React, { Component } from 'react';
import './Adverts.scss';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import testimage from '../../images/aanhanger1.jpg'

var _baseUrl = 'http://localhost:9020/';
var _protocol = 'adverts';
var content = [];
class Adverts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plaats: '',
            minprijs: '',
            maxprijs: '',
            adverts: []

        }
        this.handleChange = this.handleChange.bind(this);
    }

    formatDate(date){
        const olddate = new Date(date);
        var d = olddate.getDate();
        var m = olddate.getMonth();
        var y = olddate.getFullYear();

        const newdate = d + '-' + m + '-' + y;

        console.log(newdate);
        return newdate;
    }

    componentDidMount = () => {
        Axios.get(_baseUrl + _protocol)
            .then(res => {
                this.setState({ 
                    adverts: res.data 
                });
                console.log(this.state.adverts)
                this.generateAdverts();
            })

    }; 


    
    generateAdverts() {
        this.state.adverts.forEach(a => {
            this.formatDate(a.endingDate);
            content.push(
                <div className="container" id="cardcontainer" key={a.id}>
                    <div className="images">
                        <p>Categorie: {a.category}</p>
                        <img src={testimage} alt="description" />
                    </div>
                    <div className="sizes">
                    <p className="desc">Afmetingen (Lengte x Breedte x Hoogte):<br />{a.length}CM x {a.height}CM x {a.height}CM</p>
                    </div>
                    <div className="product">
                        
                        <h1>{a.title}</h1>
                        
                        <p className="desc">Beschrijving:<br />{a.description}</p>
                        <p className="desc">Te leen vanaf: {this.formatDate(a.startingDate)}</p>
                        <p className="desc">Te leen tot: {this.formatDate(a.endingDate)}</p>
                        <div className="buttons">
                            <input type="submit" className="fadeIn first" value="bekijk advertentie" onClick={this.handleSubmit}></input>
                        </div>
                        <h2 id="priceperday">€{a.price} per dag</h2>
                    </div>
                </div>
            )
        });
    }

    handleChange(event) {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2" id="filter">
                        <div className="card">
                            <header className="card-header" id="cardheader">
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
                    <div className="col-lg-8">
                        {content}
                    </div>
                </div>

            </div>
        );
    }
}
export default withRouter(Adverts);