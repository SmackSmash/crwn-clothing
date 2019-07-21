import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import * as S from './SignInSignUp.styled';

const SignInSignUp = props => {
  document.title = 'CRWN :: Clothing | Sign In';
  return (
    <S.SignInSignUp>
      <SignIn />
      <SignUp />
    </S.SignInSignUp>
  );
};

export default SignInSignUp;
