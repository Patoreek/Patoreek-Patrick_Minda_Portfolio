import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google}
                 style={this.props.style}
                 zoom={14}
                 initialCenter={{
                    lat: -33.7668,
                    lng: 150.9053
                  }}>
            
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1></h1>
                </div>
            </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-9fLyV56TU5kt5qw3guZ4Vi3BXuDlNts')
  })(GoogleMap);