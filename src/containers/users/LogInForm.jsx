import React, { useState } from 'react';
import { TextInputField, Button, Link } from 'evergreen-ui/';
import { Link as RouterLink } from 'react-router-dom';
import user from './templates';

const LogInForm = () => {
  const [userValue, setUserValue] = useState({ ...user });

  // const authentication = () => {
  //   axios.post('https://fakestoreapi.com/auth/login')
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch(() => {
  //       toaster.danger('Something went wrong...');
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to</h2>

        <TextInputField
          label="Email"
          required
          value={userValue.email}
          onChange={(e) => setUserValue((prevstate) => ({
            ...prevstate,
            email: e.target.value,
          }))}
          id="email-login-validation"
          className="user-validation"
          type="email"
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
          type="text"
        />

        <Button type="submit" marginRight={12} size="medium" appearance="primary">Sign In</Button>

        <div className="sign-up">
          <span>Not a member?</span>
          <Link to="/signup" is={RouterLink}> Sign up now</Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
