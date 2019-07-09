import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container" style={{textAlign: "center"}}>
        <div className="jumbotron">
          <h1 className="display-4">Fitness Tracker</h1>
          <p className="lead">
            This is a simple app to keep track of your exercises. No sign up is required!
          </p>
          <hr className="my-4" />
          <p>
            Create a user or watch the exercise list. 
          </p>
          <Link
            style={{ margin: "20px" }}
            to="/createuser"
            className="btn btn-success btn-lg"
            
          >
            Create user
          </Link>
          <Link to="/list" className="btn btn-primary btn-lg" >
            Exercise List
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
