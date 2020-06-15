import React, { Component } from 'react';
import './Adverts.scss';
import { withRouter, Link } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';
import axios from 'axios';
import { Advert } from '../../models/Advert';

var _baseUrl = 'http://localhost:9020/';
var _protocol = 'adverts';
var _imageprotocol = 'image'

class PlaceAdvert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            category:'',
            description:'',
            price:'',
            place:'',
            length:'',
            width:'',
            height:'',
            startingDate:'',
            endingDate:'',
            image:'',
            advertOwner:''

        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    // onFileChangeHandler = (e) =>{
    //     this.setState({
    //         image: e.target.files[0]
    //     });
        
    // }

    componentDidMount = () => {
        
    };
    handleChange(event) {
        this.setState({advertOwner: localStorage.getItem('loggedinuser')});
        console.log(this.state.advertOwner+"1231232123");
        this.setState({ [event.target.name]: event.target.value });
    };


    postImage(){
        
        var image = this.state.image;
        var formdata = new FormData();
        formdata.append('file',image);

        axios.post(_baseUrl+_imageprotocol,formdata,{
            headers: { 'Content-Type': 'multipart/form-data' } 
        }).then(res => {
            console.log(res.data + "gelukt zonder fouten");
        })
    };

    postAdvert(){
        this.postImage();
        var advert = new Advert(this.state.title,this.state.category,this.state.description,this.state.price,this.state.place,
            this.state.length,this.state.width,this.state.height,this.state.startingDate,this.state.endingDate,this.state.advertOwnerId);

        axios.post(_baseUrl+_protocol,advert);
    };

    handleSubmit(event){
        this.postAdvert();
    };
    render(){
        return(
            <div className="container">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={logo_expplore} id="icon" alt="User Icon" />
                    </div>
                    <input type="text" id="title" className="fadeIn second" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Titel advertentie"></input>

                    <input type="text" id="category" className="fadeIn third" name="category" value={this.state.category} onChange={this.handleChange} placeholder="Categorie"></input>

                    <input type="number" id="price" step="1" className="fadeIn third" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Prijs per dag"></input>

                    <input type="text" id="place" className="fadeIn third" name="place" value={this.state.place} onChange={this.handleChange} placeholder="Plaats"></input>

                    <input type="number" id="length" data-decimals="2" min="0" step="0.1" className="fadeIn third" name="length" value={this.state.length} onChange={this.handleChange} placeholder="Lengte"></input>
                    
                    <input type="number" id="width" data-decimals="2" min="0" step="0.1" className="fadeIn third" name="width" value={this.state.width} onChange={this.handleChange} placeholder="Breedte"></input>
                    
                    <input type="number" id="height" data-decimals="2" min="0" step="0.1" className="fadeIn third" name="height" value={this.state.height} onChange={this.handleChange} placeholder="Hoogte"></input>
                    
                    <input type="date" id="startingDate" className="fadeIn third" name="startingDate" value={this.state.startingDate} onChange={this.handleChange} placeholder="beschikbaar vanaf"></input>
                    
                    <input type="date" id="endingDate" className="fadeIn third" name="endingDate" value={this.state.endingDate} onChange={this.handleChange} placeholder="beschikbaar tot"></input>
                    
                    <p className="fadeIn third">kies uw foto</p>
                    <input type="file" id="image" className="fadeIn third" name="image" value={this.state.image} onChange={this.handleChange}></input>
                    
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