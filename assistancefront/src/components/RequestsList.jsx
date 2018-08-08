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
                       <p><a href="/">show</a>
					             <a href="/">Volunteer</a>
                       </p>
               

                </div>
            )
        })
    }
   
    render(){
        return(
        <div className ="request-list">
        {(this.state.requestsLoaded)
        ?this.renderRequests()
        :<p>Loading...</p>
        }
        </div>
        )
    }
}
export default RequestsList;