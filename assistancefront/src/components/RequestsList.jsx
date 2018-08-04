import React,{Component} from 'react';

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
              console.log(res),
              this.setState({
                  requestsList: res.requests,
                  requestsLoaded: true,
              })
          }).catch(err => console.log(err))
    }
    renderRequests(){
        const {requestsList} = this.state;
        return requestsList.map(request=>{
            return(
                <div className="requests" key={request.id}>
                <p>{request.description}</p>

                </div>
            )
        })
    }
    render(){
        return(
        <div className ="request-list">
        {(this.state.requestsLoaded)?this.renderRequests()
        :<p>Loading...</p>
        }
        </div>
        )
    }
}
export default RequestsList;