import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './LoginRegister.css';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value  = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    render(){
        return(
            <div className="back">


            <div className="div-center">


            <div className="content container">


                <h3>Login</h3>
                <hr />
                <form onSubmit = {(e) =>this.props.handleLoginSubmit(e,this.state)}>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  type="email" name = "email" placeholder ="email" value = {this.state.email} onChange = {this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name = "password" placeholder ="password" value = {this.state.password} onChange = {this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <hr />
                <Link to = "/register"><button className="btn btn-link text-white"  onClick ={this.handleLogout}>Register</button></Link>
                <button type="button" className="btn btn-link">Reset Password</button>

                </form>

            </div>


            </div>
            </div>
        )
    }
}
export default LoginForm;

