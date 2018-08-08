import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'

export class MapWindowInfo extends Component {
  render() {
    const {title, description} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div className="bg-dark text-light">
          <h1>{title}</h1>
          <p><strong>{description}</strong></p>
        </div>
      </InfoWindow>
    );
  }
}

export default MapWindowInfo
