import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedMember: {},
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedMember: props.member,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const {
      google,
      members,
      style
    } = this.props;
    const {
      selectedMember,
      activeMarker,
      showingInfoWindow
    } = this.state;
    return (
      <Map
        google={google}
        zoom={6}
        initialCenter={{
          lat: 47,
          lng: 3
        }}
        style={style}
        onClick={this.onMapClicked}
      >
 
        {members.map( member => 
          <Marker
            key={member.id}
            onClick={this.onMarkerClick}
            name={member.name}
            position={{lat: member.lat, lng: member.lng}}
            member={member}
          />)}

        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}>
            <div className='infowindow'>
              <h2>{selectedMember.name}</h2>
              <ul>
                <li>{'Email: '+selectedMember.email}</li>
                <li>{'Tel: '+selectedMember.tel}</li>
                <li>{'Description: '+selectedMember.description}</li>
              </ul>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDjVjL_r5Lg8_YDCo--aNdxDsJswhrBvfI')
})(MapContainer)