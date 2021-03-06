/*global google*/
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class MyMapComponent extends React.Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?AIzaSyA0lWqetz6UU4ozYUKYR_M34zkYIOWkSkE",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `600px`, width: `600px` }} />
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route(
            {
              origin: new google.maps.LatLng(41.85073, -87.65126),
              destination: new google.maps.LatLng(41.85258, -87.65141),
              travelMode: google.maps.TravelMode.BICYCLING
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: { ...result },
                  markers: true
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => (
      <GoogleMap defaultZoom={3}>
        {props.directions && (
          <DirectionsRenderer
            directions={props.directions}
            suppressMarkers={props.markers}
          />
        )}
      </GoogleMap>
    ));
    return <DirectionsComponent />;
  }
}
