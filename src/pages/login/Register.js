import React, { Component } from 'react';
import './Register.scss';
import { withRouter } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';

class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={logo_expplore} id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" id="email" class="fadeIn second" name="register" placeholder="email"></input>
                            <input type="text" id="password" class="fadeIn third" name="register" placeholder="password"></input>
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