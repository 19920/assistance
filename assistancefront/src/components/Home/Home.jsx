import React, { Component } from 'react';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
import './Home.css';
import Auth from '../../modules/Auth';
import NewRequest from '../NewRequest/NewRequest';
import Map from '../Map/Map';


class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
       auth :false,
    };
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
       loginButtonclassName: ''
     })
   }).catch(err => console.log(err))
 }
 addRequest(e,data){
    fetch('/requests',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        token: Auth.getToken(),
        'Authorization': 'Token ${Auth.getToken()}',
      },
      body:
        JSON.stringfy({
          request: data,
        }),


    }).then(res => res.json())
      .then(res => {
        console.log(res);

      }).catch(err=> console(err));
  }

  render() {
    if(this.state.auth){
      return(<Redirect to={'/login'}/>)
    }
    return (
      <div className ="row" id="Body">

      	         <div className="row pull-right">
                   <a href="#" onClick={this.handleLogout} className="logout pull-right">Logout</a>
                    <a href="/Requests" onClick={this.handleLogout} className="logout pull-right">Requests</a>
                     <a href="/contact" onClick={this.handleLogout} className="logout pull-right">Contact</a>
                     <a href="#" onClick={this.handleLogout} className="logout pull-right">About</a>
                    </div>
                    <div className="row">
                      <div className ="medium-4 ">
                      <NewRequest addRequest={this.addRequest} />
                        </div>
                        <div className ="medium-8 ">

                        <Map />
                        </div>

                 </div>

          </div>



    );
  }
}

export default Home;
