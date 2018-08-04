import React, { Component } from 'react';
import {Marker} from 'react-google-maps';
import { MapWindowInfo } from './MapWindowInfo';

export class MapMarker extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTooltip: false
    }

  }
  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }
 
  closeWindow() {
    this.setState({ showTooltip: false })
  }
  render() {
    const {showTooltip} = this.state
    const {id,lat, lng, description, title} = this.props
    
 
    return(
      <Marker
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        onClick={this.clickTooltip.bind(this)}
        key={`marker${id}`}>
        {showTooltip && (
          <MapWindowInfo key={`info${id}`}
            title={title}
            description={description}
             lat={lat}
             lng={lng}
            closeWindow={this.closeWindow.bind(this)}/>
        )}
        </Marker>
    );
  }

}

export default MapMarker;
