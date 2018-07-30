import React,{Component} from 'react';
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''

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
            <div className ="form">
            <form onSubmit ={(e) =>this.props.handleRegisterSubmit(e,this.state)}>
            <input type="text" name = "first_name" placeholder ="firstname" value = {this.state.first_name} onChange = {this.handleChange} />
            <input type="text" name = "last_name" placeholder ="lastname" value = {this.state.last_name} onChange = {this.handleChange} />
            <input type="email" name = "email" placeholder ="email" value = {this.state.email} onChange = {this.handleChange} />
            <input type="password" name = "password" placeholder ="password" value = {this.state.password} onChange = {this.handleChange} />
            <input type = "submit" value ="Register" />

        </form>
            </div>

        )
    }
}
export default RegisterForm;