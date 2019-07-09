import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  addUser = () => {
    const user = {
      username: this.state.username
    };

    console.log(user);

    axios
      .post("/users/add", user)
      .then(res => console.log(res.data));
  };

  onSubmit = e => {
    e.preventDefault();
    this.addUser();
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: "center" , margin: "20px"}}>Create New User</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-success"
            />
          </div>
          <h3>
            After you created a user you can create a exercise
          </h3>
          <Link to="/createexercise" className="btn btn-lg btn-secondary mr-2">
            Create Exercise
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;
