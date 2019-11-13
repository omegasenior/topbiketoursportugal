import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   // Marker,
//   Polyline
// } from "react-google-maps";
import GoogleMap from "../../GoogleMap";
// import Map from "../../leaflet";
// const { Map, TileLayer, Marker, Popup } = ReactLeaflet;

// // import L from "leaflet";
// // import Routing from "leaflet-routing-machine";
// // import { Marker } from "react-leaflet";

// // import { promiseToFlyTo, getCurrentLocation } from "../../../lib/map";

// // import Map from "../../Map";

// // const LOCATION = {
// //   lat: 41.152103,
// //   lng: -8.610452
// // };
// // const CENTER = [LOCATION.lat, LOCATION.lng];
// // const DEFAULT_ZOOM = 10;
// // const ZOOM = 17;

// // const timeToZoom = 2000;
// // const timeToOpenPopupAfterZoom = 4000;
// // const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

// // const popupContentHello = `<p>Hello 👋</p>`;
// // const popupContentGatsby = `
// //   <div class="popup-gatsby">
// //     <div class="popup-gatsby-image">
// //       teste
// //     </div>
// //     <div class="popup-gatsby-content">
// //       <h1>Gatsby Leaflet Starter</h1>
// //       <p>Welcome to your new Gatsby site. Now go build something great!</p>
// //     </div>
// //   </div>
// // `;

const TourPlanWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 29px;
    border-left: 4px dotted #ff0000;
    // transform: translate(-50%);
  }
`;

const TourPlanContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  // flex-wrap: wrap-reverse;
  // justify-content: space-around;
  align-items: stretch;
`;

const Circle = styled.div`
  border: solid 1px red;
  border-radius: 50%;
  width: 60px;
  max-width: 60px;
  min-width: 60px;
  height: 60px;
  text-align: center;
  /* vertical-align: middle; */
  display: inline-grid;
  /* align-content: center; */
  /* align-self: center; */
  align-content: center;
  background-color: red;
  color: #fff;
  margin-right: 20px;
  font-size: 1.75rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 15px;
`;

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyA0lWqetz6UU4ozYUKYR_M34zkYIOWkSkE&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px`, width: `100%` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//     defaultCenter:
//   }),
//   withScriptjs,
//   withGoogleMap
// )(_ => (
//   <
// ));

const TourPlan = ({ tour: { itinerary }, googleApiKey, location }) => {
  // const markerRef = useRef();

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  // async function mapEffect({ leafletElement } = {}) {
  //   if (!leafletElement) return;

  //   // L.Routing.control({
  //   //   waypoints: [
  //   //     L.latLng(57.74, 11.94),
  //   //     L.latLng(57.6792, 11.949)
  //   //   ]
  //   // }).addTo(map);

  //   // Routing.control({
  //   //   waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
  //   //   routeWhileDragging: true
  //   // }).addTo(map);

  //   const popup = L.popup({
  //     maxWidth: 800
  //   });

  //   const location = await getCurrentLocation().catch(() => LOCATION);

  //   const { current = {} } = markerRef || {};
  //   const { leafletElement: marker } = current;

  //   marker.setLatLng(location);
  //   popup.setLatLng(location);
  //   popup.setContent(popupContentHello);

  //   setTimeout(async () => {
  //     await promiseToFlyTo(leafletElement, {
  //       zoom: ZOOM,
  //       center: location
  //     });

  //     marker.bindPopup(popup);

  //     setTimeout(() => marker.openPopup(), timeToOpenPopupAfterZoom);
  //     setTimeout(
  //       () => marker.setPopupContent(popupContentGatsby),
  //       timeToUpdatePopupAfterZoom
  //     );
  //   }, timeToZoom);
  // }

  // const mapSettings = {
  //   center: CENTER,
  //   defaultBaseMap: "OpenStreetMap",
  //   zoom: DEFAULT_ZOOM,
  //   mapEffect
  // };
  // console.log(location);
  return (
    <div className="container">
      <TourPlanWrapper>
        {itinerary &&
          itinerary.map((item, index) => (
            <TourPlanContainer key={`tp` + index}>
              <Circle>{item.day}</Circle>
              <div>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </div>
            </TourPlanContainer>
          ))}
      </TourPlanWrapper>
      <GoogleMap zoom={7} center={location} mapkey={googleApiKey} />
      {/* <Map {...mapSettings} ref={map => this.map = map}>
        <Marker ref={markerRef} position={CENTER} />
        <Routing map={this.map} />
      </Map> */}
    </div>
  );
};

TourPlan.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    itinerary: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string
      })
    )
  })
};

export default TourPlan;
