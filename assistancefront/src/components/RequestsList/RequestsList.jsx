import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class RequestsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            requestsList: null,
            requestsLoaded: false,
        }
    }
    componentDidMount(){
        fetch('/requests')
          .then(res => res.json())
          .then(res => {
             this.setState({
                 requestsList:res.requests,
                 requestsLoaded: true
             })
          }).catch(err => console.log(err))
    }
    renderRequests(){
        return  this.state.requestsList.map(request=>{
            return(
                <div className ="request box-shadow-dark" key ={request.id}>
                       <p><strong>{request.title}</strong></p>
                       <p>{request.description}</p>
                       <p><Link to="/requests/:id">show</Link>
					             <a href="/">Volunteer</a>
                       </p>


                </div>
            )
        })
    }

    render(){
        return(
        <div className ="request-list container">
        <h3>Requests</h3>
        {(this.state.requestsLoaded)
        ?this.renderRequests()
        :<p>Loading...</p>
        }
        </div>
        )
    }
}
export default RequestsList;
