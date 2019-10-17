import React from "react";
import "./tourhighlights.mod.scss";
import { Col, Row, Container } from "@bootstrap-styled/v4";
import * as Style from "./Tourhighlights.styled";
// import BackgroundImage from 'gatsby-background-image'

import img1 from "./../../img/banners/1.jpg";
import img_tour_2 from "./../../img/the-way-of-saint-james.jpg";
import img_tour_3 from "./../../img/banners/caminho-portugues-de (5).jpg";

export default function Tourhighlights() {
  return (
    <div className="tourHighlights">
      <h2 className="tourHeaderTitle">Popular Tours</h2>
      <p className="subtitle">
        We have a unique way of meeting your adventurous expectations!
      </p>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 col-sm-6 col-md-4">
            <Style.Tour>
              <Style.ToursImageContainer>
                <Style.ToursImage src={img_tour_3} title="3" />
              </Style.ToursImageContainer>
              <Style.TourTitle>The Silver Coast - Route 1</Style.TourTitle>
              <Style.TourResume>
                This cycling tour of the Silver Coast, is an immersive and
                amazing route that starts in Porto cityand goes along the coast
                where you‘re going to find some of the most important villages
                in Portugal. Here you will have a “mix” of beaches and pine
                forests creating different feelings during the trip. Exploring
                the trails and its main highlights will give you the sense of
                fulfillment.
              </Style.TourResume>
              <Style.TourChart>
                <Style.StyledTime />
              </Style.TourChart>
            </Style.Tour>
          </div>
          <div className="col col-xs-12 col-sm-6 col-md-4">
            <Style.Tour>
              <Style.ToursImageContainer>
                <Style.ToursImage src={img_tour_2} height={285} title="2" />
              </Style.ToursImageContainer>
              <Style.TourTitle>The Way of St. James BikeTour</Style.TourTitle>
              <Style.TourResume>
                This cycling tour presents itself as na easy route to reach to
                Santiago de Compostela, the ultimate pilgrimage beacon in the
                Iberian Peninsula and one of the most important spots for
                religious tourism in Western Europe.
              </Style.TourResume>
              <Style.TourChart>
                <Style.StyledTime />
              </Style.TourChart>
            </Style.Tour>
          </div>
          <div className="col col-xs-12 col-sm-6 col-md-4">
            {/* <BackgroundImage fluid={img1} height={285} /> */}
            <Style.Tour>
              <Style.ToursImageContainer>
                <Style.ToursImage src={img1} height={285} title="3" />
              </Style.ToursImageContainer>
              <Style.TourTitle>The Way of St. James BikeTour 3</Style.TourTitle>
              <Style.TourResume>
                This cycling tour presents itself as na easy route to reach to
                Santiago de Compostela, the ultimate pilgrimage beacon in the
                Iberian Peninsula and one of the most important spots for
                religious tourism in Western Europe.
              </Style.TourResume>
              <Style.TourChart>
                <Style.StyledTime />
              </Style.TourChart>
            </Style.Tour>
          </div>
        </div>
      </div>
    </div>
  );
}
