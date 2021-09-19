import React from 'react';
import { TextInputField, Button } from 'evergreen-ui/';
import { useHistory } from 'react-router-dom';

const LogInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const history = useHistory();
  const signupRoute = () => {
    history.push('/signup');
  };

  const [userValue, setUserValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to</h2>

        <TextInputField
          label="Email"
          required
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          id="email-login-validation"
          type="email"
        />

        <TextInputField
          label="Password"
          required
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          id="password-login-validation"
          type="text"
        />

        <Button type="submit" marginRight={12} size="medium" appearance="primary">Sign In</Button>

        <div className="sign-up">
          <span>Not a member?</span>
          <a href="#!" onClick={signupRoute}> Sign up now</a>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
