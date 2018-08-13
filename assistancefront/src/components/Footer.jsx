import React, { Component } from 'react';
import{Link} from "react-router-dom"; 

class Footer extends Component {
  render() {
    return (
         <footer className ="footer">
           <nav>
    	         <ul className ="nav nav-navbar pull-right">
      		       <li><Link to ={"/home"}>Home</Link></li>
      		       <li><Link to ={"/about"}>About</Link></li>
      		       <li><Link to ={"/contact"}>Contact</Link></li>
      		       <li><Link to ={"/myCV"}>My CV</Link></li>
    	       </ul>
         </nav>
         
      </footer>
    );
  }
}

export default Footer;	