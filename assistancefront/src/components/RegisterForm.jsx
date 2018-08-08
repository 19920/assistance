import React,{Component} from 'react';
import {BrowserRouter,Link, Redirect,Route} from 'react-router-dom';
import './LoginRegister.css';
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            latitude:'',
            longitude:''

        };
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


                <div className="content">


                    <h3>Register</h3>
                    <hr />
                    <form onSubmit = {(e) =>this.props.handleRegisterSubmit(e,this.state)}>
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
                    <Link to = "/login"><button className="btn btn-link text-white"  onClick ={this.handleLogout}>Login</button></Link>
                    <button type="button" className="btn btn-link">Reset Password</button>

                    </form>

                </div>


                </div>
                </div>

        )
    }
}
export default RegisterForm;
