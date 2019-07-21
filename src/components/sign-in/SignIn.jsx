import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import * as S from './SignIn.styled';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  handleGoogle = event => {
    event.preventDefault();
    signInWithGoogle();
  };

  render() {
    return (
      <S.SignIn>
        <S.Title>I already have an account</S.Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <S.Buttons>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={this.handleGoogle}>
              Sign In With Google
            </CustomButton>
          </S.Buttons>
        </form>
      </S.SignIn>
    );
  }
}

export default SignIn;
