import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import DeleteUser from "./Components/DeleteUser";
import ExerciseList from "./Components/ExerciseList";


function App() {
  return (
    <Router>
      <NavBar />
        <Route path="/" exact component={Landing} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/createexercise" exact component={CreateExercise} />
        <Route path="/createuser" exact component={CreateUser} />
        <Route path="/deleteuser" exact component={DeleteUser} />
        <Route path="/list" exact component={ExerciseList} />

    </Router>
  );
}

export default App;
