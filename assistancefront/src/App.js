import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
import Auth from './modules/Auth';
import RequestList from './components/RequestsList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth :false,
      loginButtonClass: ''
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
   
  }
  handleLogout(){
    
    fetch('/logout',{
      method: 'DELETE',
      headers:{
        Token: Auth.getToken(),
        'Authorization': 'Token ${Auth.getToken()}'
      }
    }).then(res =>{
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginButtonClass: ''
      })
    }).catch(err => console.log(err))
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
      Auth.authenticateToken(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
        
      })
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
        Auth.authenticateToken(res.token);
        
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginButtonClass: 'd-none'
      })
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
  }
  logoutButtonClass(){
    
  }
  
  render() {
    return (
      <BrowserRouter>
      <header className ="main container-fluid">
        <Link to ="/" className ="nav-brand p-1">Söderhamn Hjälter</Link>
        <nav className="navbar bg-white white-header alt-font no-margin no-padding shrink-medium-header light-header ">
        <Link to = "login"><button className={`btn btn-success ${this.state.loginButtonClass}`} >Login</button></Link>
        <Link to = "/"><button className= "btn btn-success margin-2">Home</button></Link>
        <Link to = "register"><button className= "btn btn-success margin-2" >Register</button></Link>
        <Link to = "/login"><button onClick ={this.handleLogout}className= {`btn btn-success ${this.logoutButtonClass()}`} >Logout</button></Link>
        </nav>
       
    <Route  path ="/register" render = {()=>(this.state.auth)?
    <Redirect to = "/Home" />:
    <RegisterForm handleRegisterSubmit = {this.handleRegisterSubmit} />
    } />
    <Route exact path ="/login" render = {()=>(this.state.auth)?
    <Redirect to = "/Home" />:
    <LoginForm handleLoginSubmit = {this.handleLoginSubmit} />
    } />
    
   
    <Route  path ="/Home" render={()=>
    <Home />
    }
    />

  
    </header>
</BrowserRouter>
    );
  }
}

export default App;
