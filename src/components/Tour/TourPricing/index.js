import React from "react";
import PropTypes from "prop-types";
// import { Check } from "styled-icons/boxicons-regular/Check";
// import { X } from "styled-icons/boxicons-regular/X";
// import { CalendarCheck } from "styled-icons/boxicons-regular/CalendarCheck";
// import { TimeFive } from "styled-icons/boxicons-regular/TimeFive";
import "./tourPricing.mod.scss";
import uniq from "lodash-es/uniq";
import Package from "./Package.js";

const TourPricing = ({ tour: { pricing } }) => {
  const packagePricingKeys = uniq(
    (pricing || [])
      .filter(p => p.en)
      .map(p => (p.en.packageContents || []).map(pc => pc.title))
      .reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
      )
  );

  // console.log(JSON.stringify(packagePricingKeys));

  const packages = uniq(
    (pricing || [])
      .filter(p => p.en)
      .map(p => {
        return {
          packageName: p.en.package,
          price: p.price,
          discount: p.discount,
          bestValue: p.besValue,
          packageContents: p.en.packageContents || []
        };
      })
  );

  //  console.log(JSON.stringify(packages));

  return (
    <div>
      <div
        id="pt-pricing-table"
        className="crpt-flat crpt-flat-candlelight pt-animation-default"
      >
        <div className={"pt-cols pt-cols-" + packages.length}>
          <div className="pt-cols-side">
            <div className="pt-list-block">
              {packagePricingKeys &&
                packagePricingKeys.map((key, index) => (
                  <div key={"pk" + index} className="pt-list-item">
                    {key}
                    <span className="pt-tooltip-show-icon">
                      <span className="pt-tooltip-show">
                        <i className="fa fa-info-circle"></i>
                      </span>
                      {/* <span className="pt-tooltip">
                      <span className="pt-tooltip-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse vitae commodo quam, non auctor dui. Quisque
                        at ipsum at lorem accumsan viverra quis maximus eros.
                      </span>
                    </span> */}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="pt-cols-main">
            {packages &&
              packages.length > 0 &&
              packages.map((pack, index) => (
                <Package key={`pack` + index} data={pack}></Package>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TourPricing.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    pricing: PropTypes.arrayOf(
      PropTypes.shape({
        en: PropTypes.shape({
          packageName: PropTypes.string,
          price: PropTypes.number,
          discount: PropTypes.number,
          bestValue: PropTypes.bool,
          packageContents: PropTypes.any
        }),
        pt: PropTypes.shape({
          packageName: PropTypes.string,
          price: PropTypes.number,
          discount: PropTypes.number,
          bestValue: PropTypes.bool,
          packageContents: PropTypes.any
        })
      })
    )
  })
};

export default TourPricing;
