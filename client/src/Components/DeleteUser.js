import React, { Component } from "react";
import axios from "axios";

import Users from "./Users";

/// todo ///

// Make users "clickable", get ID and .delete

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteUser = id => {
    axios.delete(`http://localhost:5000/users/${id}`).then(response => {
      console.log(response.data);
    });

    // Filter out the deleted ID from the users array
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    });
  };

  userList() {
    return this.state.users.map(currentuser => {
      return (
        <Users
          user={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }

 

  render() {
    return (
      <div className="container">
        <div>
          <h1 style={{textAlign: "center", margin: "20px"}}>Delete user</h1>
        </div>
        <div>
          {this.userList()}
        </div>
      </div>
    );
  }
}

export default DeleteUser;
