import React from 'react';
import './App.css';
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Expplore</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" Link to="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
            <Link to="/Register">
                <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight: 10}}>Register</button>
              </Link>
              <Link to="/Login">
                <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
              </Link>
            </div>
          </div>
        </nav>
        <switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
