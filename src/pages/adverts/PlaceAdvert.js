import React, { Component } from 'react';
import './Adverts.scss';
import { withRouter, Link } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';

class PlaceAdvert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            category:'',
            description:'',
            price:'',
            place:'',
            width:'',
            height:'',
            images:[]

        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    handleSubmit(event) {
        
    }
    render(){
        return(
            <div className="container">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={logo_expplore} id="icon" alt="User Icon" />
                    </div>
                    <input type="text" id="title" className="fadeIn second" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Titel advertentie"></input>
                    <input type="text" id="category" className="fadeIn third" name="category" value={this.state.category} onChange={this.handleChange} placeholder="categorie"></input>
                    <input type="text" id="number" step="1" className="fadeIn third" name="price" value={this.state.price} onChange={this.handleChange} placeholder="prijs per dag"></input>
                    <input type="text" id="category" className="fadeIn third" name="category" value={this.state.category} onChange={this.handleChange} placeholder="categorie"></input>
                    <textarea type="text" rows="10" id="description" className="fadeIn third" name="description" value={this.state.description} onChange={this.handleChange} placeholder="advertentie omschrijving"></textarea>
                    <Link to="/">
                        <input type="submit" className="fadeIn fourth" value="Register" onClick={this.handleSubmit}></input>
                    </Link>
                </div>
            </div>
        </div>
        );
    }
}
export default withRouter(PlaceAdvert);