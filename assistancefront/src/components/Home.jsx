import React,{Component} from 'react';
import { BrowserRouter ,Route,ank,Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Auth from '../modules/Auth';
import Header from './Header';
import LoginForm from './LoginForm';
import Map from './Map';
import './Home2.css';

import Contact from './Contact';
import NewRequest from './NewRequest';
import Footer from './Footer';
class Home extends Component{
  render(){
    return(
      <div className ="container requests">
  	         <div className="text-white row">
             <div className ="col-lg-4 ">
                 <h4>All Requests</h4>
                 <div className="site-heading">
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
                <a>Jean Baptiste Kadahizi</a>
                <a>Full Stack Developer</a>
              </div>

             </div>
             <div className ="col-lg-6">
             <Map />
             </div>
          
  			   </div>
		   
        
      </div>
    )
  }
}
export default Home;