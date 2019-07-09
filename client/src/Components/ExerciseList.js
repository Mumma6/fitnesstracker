import React, { Component } from "react";
import axios from "axios";
import Exercise from "./Exercise";



export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise = id => {
    axios.delete(`/exercises/${id}`).then(response => {
      console.log(response.data);
    });

    // Filter out the deleted ID from the exercises array
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  };

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: "center", margin: "20px"}}>Exercises</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Intensity</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
