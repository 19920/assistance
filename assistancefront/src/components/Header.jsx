import React,{Component} from 'react';
class Header extends Component{
  render(){
    return(
      <header className="masthead" id ="bag">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h3>Jean Baptiste Kadahizi</h3>
                <h4>Full Stack Developer</h4>
                <p>Currently following the Full Stack Developer path @ OpenClassrooms</p>
                <hr className="amsll"/>
                <span className="subheading">Söderhamn,Sweden</span>

              </div>

            </div>
          </div>
        </div>
      </header>
    );
  }

}
export default Header;
