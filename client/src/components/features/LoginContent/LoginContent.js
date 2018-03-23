import React, { Component } from 'react';
import './LoginContent.css';
import LoginForm from '../LoginForm/LoginForm'
import LoginFormContainer from '../../containers/LoginFormContainer';
import Logo from '../Logo/Logo';

class LoginContent extends Component {
  render() {
    return (
      <div className="LoginContent">
        <Logo />
        <LoginFormContainer>
          <LoginForm></LoginForm>
        </LoginFormContainer>
      </div>
    );
  }
}

export default LoginContent;
