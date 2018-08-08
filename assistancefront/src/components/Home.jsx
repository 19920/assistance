import React,{Component} from 'react';
import { BrowserRouter ,Route,Link,Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Auth from '../modules/Auth';
import Header from './Header';
import LoginForm from './LoginForm';
import RequestsList from './RequestsList';
import Map from './Map';
import './Home2.css';

import Contact from './Contact';
import NewRequest from './NewRequest';
import Footer from './Footer';
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      auth :false
    }
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    fetch('/lgout',{
      method: 'DELETE',
      headers:{
        Token: Auth.getToken(),
        'Authorization': 'Token ${Auth.getToken()}'
      }
    }).then(res =>{
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err))
  }
  getRequests(){
    fetch('/requests')
      .then(res => res.json())
      .then(res => {
         this.setState({
             requests:res.requests,
            
         })
      }).catch(err => console.log(err))
  }
  componentDidMount(){
    this.getRequests();
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
        this.getRequests();
      }).catch(err=> console(err));
  }
  render(){
    return(
    
      
      <div className ="container-fluid  ">
  	         <div className="text-black row mapAndrequest ">
           
                  <div className ="col-lg-4 ">
                  <h2>Add new Request</h2>
                      <form onSubmit={(e)=>this.props.addRequest(e,this.state)}>
                      <div className="form-group ">
                          <label>Title</label><br/>
                          <input  type="text" name = "title"  value = {this.state.title} onChange = {this.handleChange} />
                      </div>
                      <div className="form-group">
                          <label>description</label><br/>
                          <input type="text" name = "description"  value = {this.state.description} onChange = {this.handleChange} />
                      </div>
                      <div className="form-group">
                          <label>request_type</label><br/>
                          <select className="dropdown" value = {this.state.request_type} onChange = {this.handleChange}>
                              <option>Help</option>
                              <option>Material</option>
                              </select>
                      </div>
                      <div className="form-group">
                          <label >address</label><br/>
                          <input type="text" name = "address"  value = {this.state.address} onChange = {this.handleChange} />
                      </div>
                      <button type="submit" className="btn btn-primary">Save</button>

                      </form>
                    </div>
                    <div className ="col-lg-8 ">
                    <Map />
                    </div>

             </div>
              <div className="row ">
              <h6 className=""> Requests</h6>
              <RequestsList />
                
              </div>
             
      </div>
    
     
    )
  }
}
export default Home;