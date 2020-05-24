import React, { Component } from 'react';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import PlaceAdvert from '../pages/adverts/PlaceAdvert'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Adverts from '../pages/adverts/Adverts';
import * as firebase from "firebase/app";
import "firebase/auth";

class nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: null,
            othercontent: null
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                this.setState({
                    content: <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.logout} style={{ marginRight: 10 }}>log out</button>,
                    othercontent: <div>
                        <Link to="/PlaceAdvert">
                            <button className="btn btn-outline-success my-2 my-sm-0">Place advert</button>
                        </Link>
                    </div>

                });

            }
            else {
                this.setState({
                    content: <div className="form-inline my-2 my-lg-0">
                        <Link to="/Register">
                            <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginRight: 10 }}>Register</button>
                        </Link>
                        <Link to="/Login">
                            <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
                        </Link>
                    </div>
                    ,
                    othercontent: null
                })
            }
        })
    }

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="container-fluid">

                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/">
                            <div className="navbar-brand">Expplore</div>
                        </Link>
                        <div className="container-fluid" >
                            <div className="container mr-auto">

                            </div>
                            <div>
                                {this.state.othercontent}
                            </div>

                            <div>
                                {this.state.morecontent}
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/PlaceAdvert" component={PlaceAdvert} />
                        <Route exact path="/" component={Adverts} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Register" component={Register} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default nav;