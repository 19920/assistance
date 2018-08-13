import React, { Component } from 'react';
import{Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
       <header className = "container-fluid head">
         <Link to="/" className ="nav-brand ">Söderhamn Hjälter</Link>
         <nav className= "nav navbar-static">
    	         <ul className ="nav nav-navbar pull-right">
               <li><Link to ={"/login"}>Login</Link></li>
               <li><Link to ={"/register"}>Register</Link></li>
      		       <li><Link to ={"/home"}>Home</Link></li>
      		       <li><Link to ={"/about"}>About</Link></li>
      		       <li><Link to ={"/requests"}>Requests</Link></li>
      		       <li><Link to ={"/myCV"}>My CV</Link></li>
    	       </ul>
         </nav>
       


      </header>
    );
  }
}

export default Header;
