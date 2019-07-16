import React from 'react';
import './SignInSignUp.scss';
import SignIn from '../../components/sign-in/SignIn';

const SignInSignUp = props => {
  document.title = 'CRWN :: Clothing | Sign In';
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInSignUp;
