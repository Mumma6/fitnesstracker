import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse ml-auto"
      : "collapse navbar-collapse show ml-auto";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed ml-auto"
      : "navbar-toggler navbar-toggler-right ml-auto";

    return (
      <nav style={{paddingLeft: "10rem", paddingRight: "10rem"}} className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Fitness tracker
        </Link>

        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon">
            <div className="navbar-toggler-icon-line" />
            <div className="navbar-toggler-icon-line" />
            <div className="navbar-toggler-icon-line" />
          </div>
        </button>

        <div className={classOne}>
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/list" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createexercise" className="nav-link">
                Create Exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createuser" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/deleteuser" className="nav-link">
                Delete User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
