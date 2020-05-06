import React from 'react';
import './App.css';
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Adverts from './pages/adverts/Adverts'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import * as firebase from "firebase/app";
import "firebase/auth";
import nav from './components/nav'

function App() {

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

  var content = <div className="form-inline my-2 my-lg-0">
    <Link to="/Register">
      <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginRight: 10 }}>Register</button>
    </Link>
    <Link to="/Login">
      <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
    </Link>
  </div>

  

  return (
    <div className="container-fluid">
      <nav> </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={Adverts} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
