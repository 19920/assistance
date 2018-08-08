import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MapMarker from './MapMarker';
import Auth from '../modules/Auth';
 
const LocationMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 61.30373, lng: 17.05921 }}
    defaultZoom={props.zoom}>
    {props.locations} 
    </GoogleMap>
));
 
export default class Map extends Component {
  constructor(props) {
    super(props)
 
    this.zoom = 10
 
    this.state = {
      requests:[]
    };
  }
  componentDidMount(){
    fetch('/requests')
      .then(res => res.json())
      .then(res => {
         this.setState({
             requests:res.requests,
            
         })
      }).catch(err => console.log(err))
}
 
  render() {
    const {requests} = this.state;
   
 
    return(
      <div style={{width: `1150px`, height: `750px`}}>
        <LocationMap
          locations={requests.map(request =>(<MapMarker lat={request.latitude} lng={request.longitude} description={request.description} title={request.title} />))}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}