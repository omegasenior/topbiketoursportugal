import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { MapPin } from "react-feather";

// let mapkey = "";
// if (process.env.NETLIFY_MAP_KEY) {
//   mapkey = process.env.NETLIFY_MAP_KEY;
// }

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.14961,
      lng: -8.61099
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.locations &&
            this.props.locations.length > 0 &&
            this.props.locations.map((location, index) => (
              <Marker
                key={`m` + index}
                lat={location.lat}
                lng={location.lng}
                text={location.text || ""}
              />
            ))}
          {this.props.location && (
            <Marker
              lat={this.props.location.lat}
              lng={this.props.location.lng}
              text={this.props.location.text || ""}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

const Marker = () => {
  return (
    <div style={{ color: "red" }}>
      <MapPin />
    </div>
  );
};
