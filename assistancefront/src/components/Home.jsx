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
import Story from './Story';
import Footer from './Footer';
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      auth :false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.addRequest = this.addRequest.bind(this);
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
      })
    }).catch(err => console.log(err))
  }
  getRequests(){
    fetch('/profile')
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
        
      }).catch(err=> console(err));
  }
  render(){
    return(
      <div className ="container-fluid  ">
      <div className="text-black row mapAndrequest ">
    
           <div className ="col-lg-4 ">
           <NewRequest addRequest={this.addRequest} />
             </div>
             <div className ="col-lg-8 ">
             <Map />
             </div>

      </div>
      <div>
        <Story />
        </div>
        <Header />
</div>
    
      
      
    
     
    )
  }
}
export default Home;