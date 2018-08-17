import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Request extends Component{
  constructor(props){
      super(props);
      this.state = {
          activeRequest: {}

      }
  }

  componentWillMount(){
    const id = this.props.location.state.request;
      fetch(`/requests/${id}`)
        .then(res => res.json())
        .then(res => {
          console.log('ggdg',res);
          this.setState({activeRequest: res.request});
          console.log(this.state.activeRequest);

        }).catch(err => console.log(err))
  }
  handleVolunteer(){

  }

  render(){
   
    const request= this.state.activeRequest;
    
    return(
      <div className="request box-shadow-dark container">
      
        <div className="active_request">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
            </thead>
              <tbody>
                <tr>
                  <td>{request.title}</td>
                  <td>{request.description}</td>
                  <td>{request.request_type}</td>
                  <td>{request.status}</td>
                  <td>{request.address}</td>
                </tr>

              </tbody>

        </table>
       
        </div>
        <a href="/volunteer"  type="button"className="text-primary" onClick={this.handleVolunteer.bind(this)} disabled={this.status}>Volunteer</a>
      </div>
    )
  }
}
export default Request;
