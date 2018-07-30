import React, { Component } from 'react';
import {BrowserRouter as Router,Link, Redirect,Route} from 'react-router-dom';
import './App.css';
import Auth from './modules/Auth';
import RequestList from './components/RequestsList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth :Auth.isUserAuthenticated()
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleRegisterSubmit(e,data){
    e.preventDefault();
    fetch('/users',{
      method: 'POST',
      body: JSON.stringify({
        user: data,
      }),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  handleLoginSubmit(e,data){
    e.preventDefault();
    fetch('/login',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
     }).then(res => res.json())
      .then(res => {
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
  }
  render() {
    return (
      <Router>
        <div className="App">
       
        <Route exact path ="/requests" render={()=>
        <RequestList /> 
        }
        />
        <Route exact path ="/register" render = {()=>
        <RegisterForm handleRegisterSubmit = {this.handleRegisterSubmit} />
        } />
        <Route exact path ="/login" render = {()=>
        <LoginForm handleLoginSubmit = {this.handleLoginSubmit} />
        } />
        
      
        </div>
      </Router>
    );
  }
}

export default App;
