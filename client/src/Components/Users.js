import React from "react";
import "./Users.css"

const Users = props => (
  <div className="user">
    <div>
      <h3>{props.user.username}</h3>
    </div>

    <button
      className="btn btn-danger"
      onClick={() => {
        props.deleteUser(props.user._id);
      }}
    >
      delete
    </button>
  </div>
);

export default Users;
