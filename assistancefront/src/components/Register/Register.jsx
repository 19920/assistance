import React,{Component} from 'react';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
import Auth from '../../modules/Auth';
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            latitude:'',
            longitude:'',
            auth: false


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value  = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    handleRegisterSubmit(e,data){
      e.preventDefault();
      fetch('/users',{
        method: 'POST',
        body: JSON.stringify({
          user: data,
        }),
        headers: {
          'Content-type': 'application/json',
        }
      }).then(res => res.json())
      .then(res => {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginButtonClass: 'd-none',
          logoutButtonClass: ''
        })
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    }
    render(){
      if(this.state.auth){
        return(<Redirect to={'/home'}/>)
      }
        return(
          <div className="row small-up-2 medium-up-3 large-up-4 column">
              <div className=" ">

                    <h3>Register</h3>
                    <hr />
                    <form onSubmit = {(e) =>this.handleRegisterSubmit(e,this.state)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Firstname</label>
                        <input className="from-control" type="text" name = "first_name" value = {this.state.first_name} onChange = {this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Lastname</label>
                        <input className="from-control" type="text" name = "last_name"  value = {this.state.last_name} onChange = {this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name = "email"  value = {this.state.email} onChange = {this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name = "password"  value = {this.state.password} onChange = {this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <hr />
                  <p> Already have account?  <Link to = "/login"><button className="btn btn-primary text-white"  onClick ={this.handleLogout}>Login</button></Link></p>


                    </form>

                </div>


                </div>


        )
    }
}
export default Register;
