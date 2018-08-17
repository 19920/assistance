import React, { Component } from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import './styles/foundation.min.css'
import './styles/custom.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './Router';


class App extends Component {
  constructor(props){
    super();
    this.state ={
    appName : 'Söderhamns hjältar',
    home: false
    
    }
  }
 

  render() {
    return (
    <div className="off-canvas-content" data-off-canvas-content>
        <Header name ={this.state.appName}/>

        <div className="row">
          <div className="cell">
        <Routes name={this.state.appName}/>
       

          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="cell">
          <Footer />

          </div>
        </div>

    </div>


    );
  }
}

export default App;
