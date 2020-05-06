import React, { Component } from 'react';
class nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content = null
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
              console.log("hij komt hier wel rick")
              content = <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginRight: 10 }}>log out</button>
        
            }
            else {
              content = <div className="form-inline my-2 my-lg-0">
                <Link to="/Register">
                  <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginRight: 10 }}>Register</button>
                </Link>
                <Link to="/Login">
                  <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
                </Link>
              </div>
            }
          })
    }
    

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <div className="navbar-brand">Expplore</div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link">Home <span className="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            </div>
                        </li>
                    </ul>
                    <div>
                        {content}
                    </div>
                </div>
            </nav>
        );
    }
}
export default nav;