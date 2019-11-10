import React from "react";
import Layout from "../layout/LayoutBootstrap";

const BikeTemplate = ({ name, image }) => (
  <>
    <h2>{name}</h2>
    <Img fluid={image}></Img>
  </>
);

const BikesPage = bikes => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-4">
          <BikeTemplate />
        </div>
        <div className="col-xs-1 col-4">
          <BikeTemplate />
        </div>
        <div className="col-xs-1 col-4">
          <BikeTemplate />
        </div>
      </div>
    </div>
  </Layout>
);

export default BikesPage;
