import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 33.6839473,
         lng:  -117.7946942
        }}>
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Irvine'}
           position={{lat: 33.709061, lng: -117.861060}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Los Angeles'}
           position={{lat: 34.054098, lng: -118.267648}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Bay Area'}
           position={{lat: 37.797591, lng: -122.440646}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Irvine'}
           position={{lat: 33.709061, lng: -117.861060}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Miami'}
           position={{lat: 33.709061, lng: -80.191384}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness New York'}
           position={{lat: 40.724496, lng: -73.990013}} />
        <Marker />
        <Marker
        	onClick={this.onMarkerClick}
           name={'Gain Fitness Toyko'}
           position={{lat: 35.730744, lng: 139.672415}} />
        <Marker />
  
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </Map>  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAzVa1munNrgmPcoxn7N-eu697vAIhYSf4'
})(MapContainer);