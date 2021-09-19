import React from 'react';
import { TextInputField, Button } from 'evergreen-ui/';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const history = useHistory();
  const loginRoute = () => {
    history.push('/login');
  };

  const [userValue, setUserValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [usernameValue, setusernameValue] = React.useState('');
  const [firstNameValue, setfirstNameValue] = React.useState('');
  const [lastNameValue, setlastNameValue] = React.useState('');

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign up now</h2>

        <TextInputField
          label="Email"
          required
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          id="email-login-validation"
          type="email"
        />

        <TextInputField
          label="User Name"
          required
          value={usernameValue}
          onChange={(e) => setusernameValue(e.target.value)}
          id="user-name-login-validation"
          type="text"
        />

        <TextInputField
          label="Password"
          required
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          id="password-login-validation"
          type="text"
        />
        <div className="signup-first-and-last-name">
          <TextInputField
            label="First Name"
            width="45%"
            required
            value={firstNameValue}
            onChange={(e) => setfirstNameValue(e.target.value)}
            id="password-login-validation"
            type="text"
          />
          <TextInputField
            label="Last Name"
            width="45%"
            required
            value={lastNameValue}
            onChange={(e) => setlastNameValue(e.target.value)}
            id="password-login-validation"
            type="text"
          />
        </div>

        <Button type="submit" marginRight={12} size="medium" appearance="primary">Sign Up</Button>

        <div className="sign-up">
          <span>Already a member?</span>
          <a href="#!" onClick={loginRoute}> Log in now</a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
