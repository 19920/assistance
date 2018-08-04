import React ,{Component} from 'react';
import{Link} from "react-router-dom";
class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar navbar-default navbar-fixed-top" id="mainNav" data-spy="scroll" data-target="#navbarResponsive" >
        <div className="container">
        <Link to="/" className ="nav-brand ">Jean Baptiste Kadahizi</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className=" navbar-collapse " id="navbarResponsive">
          <ul className="navbar-nav ml-auto nav page-nav list-inline">

      		       <li className="nav-link"><Link to ={"/index.html"}>Home</Link></li>
      		       <li className="nav-link"><Link to ={"/About"}>About</Link></li>
      		       <li className="nav-link"><Link to ={"/Contact"}>Contact</Link></li>
                   <li className="nav-link"><Link to ={"/NewRequest"}>Add Request</Link></li>




          </ul>
        </div>
      </div>
  </nav>
    );
  }

}
export default Navbar;