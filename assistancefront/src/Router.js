import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import RequestsList from './components/RequestsList/RequestsList';
import NotFound from './components/NotFound/NotFound';
import Request from'./components/Request/Request';
const Routes =()=>(
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Welcome} exact />
          <Route  path='/login' component={Login} />
          <Route  path='/register' component={Register} />
          <Route  path='/Home' component={Home} />
          <Route  path='/contact' component={Contact} />
          <Route  path='/Requests' component={RequestsList} />
          <Route path ='/request/:id' component={Request}/>
          <Route path='*'component={NotFound} />




        </Switch>
    </BrowserRouter>
);
export default Routes;
