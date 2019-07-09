import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      intensity: "",
      frequency: "",
      duration: "",
      date: new Date(),
      users: []
    };
  }

  async componentDidMount() {
    try {
      const url = `http://localhost:5000/exercises/${
        this.props.match.params.id
      }`;
      let response = await axios.get(url);
      let data = response.data;
      this.setState({
        username: data.username,
        description: data.description,
        intensity: data.intensity,
        frequency: data.frequency,
        duration: data.duration,
        date: new Date(data.date)
      });
    } catch (error) {
      console.log(error);
    }

    try {
      const url = "http://localhost:5000/users/";
      let response = await axios.get(url);
      let data = response.data;
      if (data.length > 0) {
        this.setState({
          users: data.map(user => user.username)
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  addExercise = () => {
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      intensity: this.state.intensity,
      frequency: this.state.frequency,
      date: this.state.date
    };

    console.log(exercise);

    axios
      .post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
      .then(res => console.log(res.data));
  };

  onSubmit = e => {
    e.preventDefault();
    this.addExercise();
    this.setState({
      description: "",
      intensity: "",
      frequency: "",
      duration: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1 style={{ textAlign: "center", margin: "20px" }}>
            Edit Exercise
          </h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Choose user: </label>
              <select
                name="username"
                ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChange}
              >
                {this.state.users.map(function(user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Description: </label>
              <textarea
                name="description"
                type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Intensity: </label>
              <input
                name="intensity"
                type="text"
                className="form-control"
                value={this.state.intensity}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Frequency: </label>
              <input
                name="frequency"
                type="text"
                required
                className="form-control"
                value={this.state.frequency}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input
                name="duration"
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Save Exercise"
                className="btn btn-success"
              />
            </div>
          </form>

          <h3>
            Go to Exercise List
          </h3>
          <Link to="/list" className="btn btn-lg btn-secondary mr-2">
            Exercise List
          </Link>
        </div>
      </div>
    );
  }
}

export default EditExercise;
