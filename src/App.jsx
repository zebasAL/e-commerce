import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import LogInForm from './containers/users/LogInForm';
import HomePage from './containers/HomePage';
import ProductView from './containers/ProductView';
import NavBar from './components/ui/navbar/NavBar';
import './App.css';
import SignUpForm from './containers/users/SignUpForm';
import CategoryView from './containers/CategoryView';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
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
            <Route exact path="/products/:id">
              <ProductView />
            </Route>
            <Route exact path="/products">
              <CategoryView />
            </Route>
            <Route exact path="/category/:category">
              <CategoryView />
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
  </Provider>
);

export default App;
