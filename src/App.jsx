import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogInForm from './containers/LogInForm';
import HomePage from './containers/HomePage';
import NavBar from './containers/NavBar';
import './App.css';
import SignUpForm from './containers/SignUpForm';

const App = () => (
  <Router>
    <div className="App">
      <nav className="navbar">
        <NavBar />
      </nav>

      <main className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LogInForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
