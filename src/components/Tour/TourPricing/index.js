import React from "react";
import PropTypes from "prop-types";
import { Check } from "styled-icons/boxicons-regular/Check";
import { X } from "styled-icons/boxicons-regular/X";
import { CalendarCheck } from "styled-icons/boxicons-regular/CalendarCheck";
import { TimeFive } from "styled-icons/boxicons-regular/TimeFive";
import "./tourPricing.mod.scss";
import uniq from "lodash-es/uniq";
import Package from "./Package.js";

const TourPricing = ({ tour: { pricing } }) => {
  const packagePricingKeys = uniq(
    pricing
      .filter(p => p.en)
      .map(p => p.en.packageContents.map(pc => pc.title))
      .reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
      )
  );

  const packages = uniq(
    pricing
      .filter(p => p.en)
      .map(p => {
        return {
          packageName: p.en.package,
          price: p.price,
          discount: p.discount,
          bestValue: p.besValue,
          packageContents: p.en.packageContents
        };
      })
  );

  // console.log(JSON.stringify(packages));

  return (
    <div>
      <div
        id="pt-pricing-table"
        className="crpt-flat crpt-flat-candlelight pt-animation-default"
      >
        <div className={"pt-cols pt-cols-" + packages.length}>
          <div className="pt-cols-side">
            <div className="pt-list-block">
              {packagePricingKeys.map(key => (
                <div key={key} className="pt-list-item">
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

              {/* <div className="pt-list-item">
                Accommodations W/ Breakfast
                <span className="pt-tooltip-show-icon">
                  <span className="pt-tooltip-show">
                    <i className="fa fa-info-circle"></i>
                  </span>
                  <span className="pt-tooltip">
                    <span className="pt-tooltip-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse vitae commodo quam, non auctor dui. Quisque at
                      ipsum at lorem accumsan viverra quis maximus eros.
                    </span>
                  </span>
                </span>
              </div>
              <div className="pt-list-item">
                <span className="pt-tooltip-show-text">
                  <span className="pt-tooltip-show">Luggage shuttling</span>
                  <span className="pt-tooltip pt-tooltip-right-bottom">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">
                        For you and your friend
                      </span>
                      <span className="pt-tooltip-list pt-tooltip-2col">
                        <span>
                          <CalendarCheck size="16" />
                          Free Daily Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16" />
                          99.99% Uptime
                        </span>
                        <span>
                          <Check size="16" />
                          Power Redundancy
                        </span>
                        <span>
                          <Check size="16" />
                          Fast &amp; simple
                        </span>
                        <span>
                          <X size="16" />
                          16/7 support
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="pt-list-item">
                <span className="pt-tooltip-show-text">
                  <span className="pt-tooltip-show">
                    Porto Airport Transfers
                  </span>
                  <span className="pt-tooltip pt-tooltip-right">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">
                        For you and your friend
                      </span>
                      <span className="pt-tooltip-list pt-tooltip-2col">
                        <span>
                          <CalendarCheck size="16" />
                          Free Daily Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16" />
                          99.99% Uptime
                        </span>
                        <span>
                          <Check size="16" />
                          Power Redundancy
                        </span>
                        <span>
                          <Check size="16" />
                          Fast &amp; simple
                        </span>
                        <span>
                          <X size="16" />
                          16/7 support
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="pt-list-item pt-border-bottom">
                <span className="pt-tooltip-show-text">
                  <span className="pt-tooltip-show">Trains or Bus Tickets</span>
                  <span className="pt-tooltip pt-tooltip-right-top">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">For a company</span>
                      <span className="pt-tooltip-list">
                        <span>
                          <CalendarCheck size="16" />
                          Free Daily Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16" />
                          99.99% Uptime
                        </span>
                        <span>
                          <Check size="16" />
                          Power Redundancy
                        </span>
                        <span>
                          <Check size="16" />
                          Fast &amp; simple
                        </span>
                        <span>
                          <X size="16" />
                          16/7 support
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="pt-list-item">Van Support</div>
              <div className="pt-list-item">promise</div>
              <div className="pt-list-item pt-border-bottom">support</div>
              <div className="pt-list-item">security</div>
              <div className="pt-list-item">cPanel</div>
              <div className="pt-list-item">SiteLock CDN</div>
              <div className="pt-list-item">SSL certificate</div> */}
            </div>
          </div>
          <div className="pt-cols-main">
            {packages.map((pack, index) => (
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
    subTitle: PropTypes.string,
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
