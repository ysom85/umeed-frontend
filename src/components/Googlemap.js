import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 24.68831,
      lng: 83.06502,
    },
    zoom: 11,
  };
  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA3-QHEuvQk0eukTOyuFo5rU9v_hBg0GnA",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={24.68831} lng={83.06502} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Googlemap;
