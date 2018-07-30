import React,{Component} from 'react';

class RequestList extends Component{
    constructor(){
        super()
        this.state = {
            requestList: null,
            requestListLoaded: false,
        };
    }
    componentDidMount(){
        fetch('/requests')
         .then(res => res.json())
         .then(res =>{
             console.log(res);
            this.setState({
                requestList: res.requests,
                requestListLoaded: true
            })
         }).catch(err => console.log(err));
    }
    renderRequests(){
        const {requestList} = this.state;
        return requestList.map(request => {
            return(
                <div className="request" key ={request.id}>
                <p>{request.title}</p>
                <p>{request.description}</p>
                <p>{request.address}</p>
                <p>{request.status}</p>
                <p>{request.request_type}</p>
                </div>
            )
        })
    }
    render(){
        return(
            <div className ="request-List">
            {(this.state.requestListLoaded)? this.renderRequests()
            :<p>Loading.....</p>}
            </div>
        )
    }
}
export default RequestList;