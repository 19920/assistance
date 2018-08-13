import React, { Component } from 'react';
import './styles/foundation.min.css'
import './styles/custom.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './Router';


class App extends Component {
  constructor(props){
    super();
    this.state ={
    appName : 'Söderhamn Hjälter',
    home: false
    }
  }
  render() {
    return (



<div className="off-canvas-content" data-off-canvas-content container>
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
