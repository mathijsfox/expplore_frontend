import React, { Component } from 'react';
import './Login.scss';
import { withRouter, Link } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { User } from '../../models/User';
export const add = (x,y) => x + y;
class Login extends Component {

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
                console.log('logged in');

                localStorage.setItem('loggedinuser',new User(firebaseUser.uid,firebaseUser.email,firebaseUser.displayName));
                console.log(firebaseUser.uid + 'hallo');
            }
            else {
                console.log('not logged in');
            }
        })
    };

   

    handleSubmit(event) {
        this.login();
    }

    login() {
        const email = this.state.email;
        const password = this.state.password;

        const promise = firebase.auth().signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
        
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
                        <input type="text" id="email" className="fadeIn third" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
                        <input type="password" id="password" className="fadeIn third" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
                        <Link to="/">
                            <input id="buttonSubmit" type="submit" className="fadeIn fourth" value="login" onClick={this.handleSubmit}></input>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);