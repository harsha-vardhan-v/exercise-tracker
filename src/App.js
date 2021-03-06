import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';

import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';

import UserList from './components/user-list.component';
import EditUser from './components/edit-user.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    
    <Router>
      <div className="container">
        <Navbar />
        <br />

        <Route path = "/" exact component = {ExerciseList} />
        <Route path = "/exercise/edit/:id" component = {EditExercise} />
        <Route path = "/exercise/create" component = {CreateExercise} />

        <Route path="/user/create" component={CreateUser} />
        <Route path="/user/" component={UserList} />
        <Route path = "/user/edit/:id" component = {EditUser} />
      </div>
    </Router>
  );
}

export default App;
