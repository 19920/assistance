import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import RegisterForm from  './RegisterForm';
import TopMenu from './TopMenu';
class LoginScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <Route path="/login" exact={true} component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </React.Fragment>
    )
  }
}

export default LoginScreen;