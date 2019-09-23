import React from "react";
import PropTypes from "prop-types";
import { Banners } from "../../components/banners";

const BannerPreview = ({ entry, widgetFor }) => {
  var banner = entry.getIn(["data", "title"]);
  return <Banners banners={[banner]} />;
};

BannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BannerPreview;
