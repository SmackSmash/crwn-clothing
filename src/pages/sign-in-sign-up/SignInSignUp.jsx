import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './SignInSignUp.scss';

const SignInSignUp = props => {
  document.title = 'CRWN :: Clothing | Sign In';
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
