import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import logo_expplore from '../../images/logo_expplore.png';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={logo_expplore} id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
                            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
                            <input type="submit" class="fadeIn fourth" value="Log In"></input>
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

export default withRouter(Login);