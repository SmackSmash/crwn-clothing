import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign in with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display name"
            name="displayName"
            type="text"
            onChange={this.handleChange}
            value={this.state.displayName}
            required
          />
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
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
