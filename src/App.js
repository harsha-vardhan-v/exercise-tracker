import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.components';

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path = "/" exact component = {ExerciseList} />
      <Route path = "/exercise/edit/:id" component = {EditExercise} />
      <Route path = "/exercise/create" component = {CreateExercise} />
      <Route path = "/user/create" component = {CreateUser} />
    </Router>
  );
}

export default App;
