import React, { Component } from 'react';
import './Register.scss';
import { withRouter } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';
import * as firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyDEcESBUlY2k4BYw5bGu0fcw5SE762g2LM",
    authDomain: "expplore-5486f.firebaseapp.com",
    databaseURL: "https://expplore-5486f.firebaseio.com",
    projectId: "expplore-5486f",
    storageBucket: "expplore-5486f.appspot.com",
    messagingSenderId: "477652425945",
    appId: "1:477652425945:web:ccd1cce9d5dda98b2072c8",
    measurementId: "G-BG3LFD285Z"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


class Register extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            Console.log(error.code);
            Console.log(error.message);
          });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={logo_expplore} id="icon" alt="User Icon" />
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="email" class="fadeIn second" name="register" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
                            <input type="text" id="password" class="fadeIn third" name="register" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
                            <input type="submit" class="fadeIn fourth" value="Register"></input>
                        </form>
                        <div id="formFooter">
                            <a class="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);