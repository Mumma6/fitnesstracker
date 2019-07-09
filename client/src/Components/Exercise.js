import React from "react";
import { Link } from "react-router-dom";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.frequency}</td>
    <td>{props.exercise.intensity}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>
        <button className="btn btn-info btn-sm">Edit</button>
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default Exercise;
