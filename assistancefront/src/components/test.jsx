import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './MapMarker';
import Auth from '../modules/Auth';
const LocationMap = withGoogleMap(props => (
  <GoogleMap
  defaultCenter={{ latitude: 61.30373,longitude: 17.05921,}}
  defaultZoom={props.zoom}>
  {props.locations}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 11

    this.state = {
      requests:[],
      requestsLoaded:false
    };
  }
  componentDidMount(){
    fetch('/profile',{
    method:'GET',
    headers:{
      token: Auth.getToken(),
      'Authorization': 'Token ${Auth.getToken()}',
    }
  }).then(res => res.json())
      .then(res => {
          console.log(res),
          this.setState({
              requests: res.requests,
              requestsLoaded: true,
          })
      }).catch(err => console.log(err))
}
  
  render() {
    const {requests} = this.state;
    return(
      <div className="container">
      <div style={{width: `150px`, height: `550px`}}>

        <LocationMap
        locations ={requests.map(request =>(<MapMarker lat={request.latitude} lng={request.longitude} description={request.description} title = {request.title}  />))}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%`,width: `800px` }} />
          }
          mapElement={
            <div style={{ height: `100%`,width: `100%`}} />
          }
          loadingElement={
            <div style={{ height: `100%` }} />
            }
        />
    </div>
        </div>
    );
  }
}
export default Map;