import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import actionCable from 'actioncable';


const CableApp ={}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3001/cable`)




ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
