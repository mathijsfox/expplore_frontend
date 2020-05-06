import React, { Component } from 'react';
import './Register.scss';
import { withRouter, Link } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';
import * as firebase from "firebase/app";
import "firebase/auth";
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

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log('registered');
            }
            else {
                console.log('not registered');
            }
        })
    }
    handleSubmit(event) {
        const email = this.state.email;
        const password = this.state.password;

        const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
        console.log('register succesfull');
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={logo_expplore} id="icon" alt="User Icon" />
                        </div>
                        <input type="text" id="email" className="fadeIn second" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
                        <input type="password" id="password" className="fadeIn third" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
                        <Link to="/">
                            <input type="submit" className="fadeIn fourth" value="Register" onClick={this.handleSubmit}></input>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);