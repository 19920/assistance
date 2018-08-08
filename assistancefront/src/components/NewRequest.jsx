import React,{Component} from 'react';
import Auth from '../modules/Auth';
import './LoginRegister.css';
class NewRequest extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"",
            description:"",
            request_type:"",
            address: ""

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
            <div className="container text-white  ">


            <div className="row">


            <div className="">
                <h2>Add new Request</h2>
                <form onSubmit={(e)=>this.props.addRequest(e,this.state)}>
                <div className="form-group ">
                    <label>Title</label><br/>
                    <input  type="text" name = "title"  value = {this.state.title} onChange = {this.handleChange} />
                </div>
                <div className="form-group">
                    <label>description</label><br/>
                    <textarea type="text" name = "description"  value = {this.state.description} onChange = {this.handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>request_type</label><br/>
                    <select className="dropdown" value = {this.state.request_type} onChange = {this.handleChange}>
                        <option>Help</option>
                        <option>Material</option>
                        </select>
                </div>
                <div className="form-group">
                    <label >address</label><br/>
                    <input type="text" name = "address"  value = {this.state.address} onChange = {this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>

                </form>
                </div>
                </div>
                </div>
        );
    }
}
export default NewRequest;