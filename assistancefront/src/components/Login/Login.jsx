import React,{Component} from 'react';
import Auth from '../../modules/Auth';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value  = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    handleLoginSubmit(e,data){
      e.preventDefault();
      fetch('/login',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
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
          <div className="row small-up-2 medium-up-3 large-up-4">
           <div className=" ">


                <h3>Login</h3>
                <hr />
                <form onSubmit = {(e) =>this.handleLoginSubmit(e,this.state)}>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  type="email" name = "email" placeholder ="email" value = {this.state.email} onChange = {this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name = "password" placeholder ="password" value = {this.state.password} onChange = {this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary text-white box-shaow-dark border-radius-4">Login</button>
                <hr />
                <Link to = "/register"><button className="btn btn-primary text-white"  onClick ={this.handleLogout}>Register</button></Link>
                <button type="button" className="btn btn-link">Reset Password</button>

                </form>

            </div>


            </div>

        )
    }
}
export default Login;
