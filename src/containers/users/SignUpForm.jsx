import React, { useState } from 'react';
import {
  TextInputField,
  Button,
  Link,
  toaster,
} from 'evergreen-ui/';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import user from './templates';

const SignUpForm = () => {
  const [initialValue, setInitialValue] = useState({ ...user });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    axios.post('https://fakestoreapi.com/users', initialValue)
      .then(() => {
        toaster.success('Account created successfully');
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        toaster.danger('Something went wrong...');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSignUp();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign up now</h2>

        <TextInputField
          label="User Name"
          required
          value={initialValue.username}
          onChange={(e) => {
            setInitialValue((prevState) => ({
              ...prevState,
              username: e.target.value,
            }));
          }}
          id="username-signup-validation"
          className="user-validation"
          type="text"
        />

        <TextInputField
          label="Email"
          required
          value={initialValue.email}
          onChange={(e) => {
            setInitialValue((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
          id="email-signup-validation"
          className="user-validation"
          type="email"
        />

        <TextInputField
          label="Password"
          required
          value={initialValue.password}
          onChange={(e) => {
            setInitialValue((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
          id="password-signup-validation"
          className="user-validation"
          type="password"
        />

        <div className="signup-first-and-last-name">
          <TextInputField
            label="First Name"
            width="45%"
            required
            value={initialValue.name.firstname}
            onChange={(e) => {
              setInitialValue((prevState) => ({
                ...prevState,
                name: {
                  ...prevState.name,
                  firstname: e.target.value,
                },
              }));
            }}
            id="firstname-signup-validation"
            className="user-validation"
            type="text"
          />
          <TextInputField
            label="Last Name"
            width="45%"
            required
            value={initialValue.name.lastname}
            onChange={(e) => {
              setInitialValue((prevState) => ({
                ...prevState,
                name: {
                  ...prevState.name,
                  lastname: e.target.value,
                },
              }));
            }}
            id="lastname-signup-validation"
            className="user-validation"
            type="text"
          />
        </div>

        <Button isLoading={isLoading} type="submit" marginRight={12} size="medium" appearance="primary">Sign Up</Button>

        <div className="sign-up">
          <span>Already a member?</span>
          <Link to="/login" is={RouterLink}> Log in now</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
