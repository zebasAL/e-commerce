import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextInputField, Button, Link, toaster,
} from 'evergreen-ui/';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import user from './templates';

const LogInForm = () => {
  const [userValue, setUserValue] = useState({ ...user });
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const getUsers = () => {
    axios.get('https://fakestoreapi.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        toaster.notify('unknown error');
      });
  };

  const setLocalStorageId = () => {
    if (users.length) {
      const [retrievedUser] = users.filter((item) => item.username === userValue.username);
      localStorage.setItem('id', retrievedUser?.id);
    }
  };

  const handleAuthentication = () => {
    setIsLoading(true);
    axios.post('https://fakestoreapi.com/auth/login', {
      username: userValue.username,
      password: userValue.password,
    })
      .then((res) => {
        toaster.success('you logged in');

        setIsLoading(false);
        localStorage.setItem('token', res.data.token);
        history.push('/');
        window.location.reload(false);
      })
      .catch(() => {
        toaster.notify('we could not find that user');
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAuthentication();
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setLocalStorageId();
  }, [getUsers]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to</h2>

        <TextInputField
          label="User Name"
          required
          value={userValue.username}
          onChange={(e) => setUserValue((prevstate) => ({
            ...prevstate,
            username: e.target.value,
          }))}
          id="username-login-validation"
          className="user-validation"
          type="text"
        />

        <TextInputField
          label="Password"
          required
          value={userValue.password}
          onChange={(e) => setUserValue((prevstate) => ({
            ...prevstate,
            password: e.target.value,
          }))}
          id="password-login-validation"
          className="user-validation"
          type="password"
        />

        <Button isLoading={isLoading} type="submit" marginRight={12} size="medium" appearance="primary">Sign In</Button>

        <div className="sign-up">
          <span>Not a member?</span>
          <Link to="/signup" is={RouterLink}> Sign up now</Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
