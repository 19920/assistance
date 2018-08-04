import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './MapMarker';
const LocationMap = withGoogleMap(props => (
  <GoogleMap
  defaultCenter={{ lat: 61.30373, lng: 17.05921}}
  defaultZoom={props.zoom}>
  {props.locations}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 11

    this.state = {
      requests:[]
    };
  }
  componentDidMount(){
        fetch('/requests')
          .then(res => res.json())
          .then(res => {
              console.log(res),
              this.setState({
                  requests: res.requests,
                  
              })
          }).catch(err => console.log(err))
    }
  
  render() {
    const {requests} = this.state;
    return(
      <div className="container">
      <div style={{width: `150px`, height: `550px`}}>

        <LocationMap
         locations ={requests.map(request =>(<MapMarker lat={requests.latitude} lng={requests.longitude} description={requests.description} title = {requests.title}  />))}
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