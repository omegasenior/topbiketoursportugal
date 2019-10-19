import React from "react";
import { Check } from "styled-icons/boxicons-regular/Check";
import { X } from "styled-icons/boxicons-regular/X";
import { CalendarCheck } from "styled-icons/boxicons-regular/CalendarCheck";
import { TimeFive } from "styled-icons/boxicons-regular/TimeFive";
import "./tourPricing.mod.scss";

export default function() {
  const tour = {
    body: "Tour 1",
    groupSizeMax: 1,
    path: "/silver-coast-version2",
    meta: {
      title: "1",
      description: "1",
      canonicalLink: "1"
    },
    templateKey: "tour-gen",
    pricing: [
      {
        en: {
          package: "Self Guided bike Tour",
          packageContents: [
            {
              title: "Accommodations W/ Breakfast",
              value: "Yes (3 and 4 stars, farms or rural houses)",
              icon: "✓"
            },
            {
              title: "Luggage shuttling",
              value: "yes"
            },
            {
              title: "Porto Airport Transfers",
              value: "yes"
            },
            {
              title: "Trains or Bus Tickets",
              value: "yes"
            },
            {
              title: "Van Support",
              value: "yes"
            },
            {
              title: "GPS With route per booking",
              value: "yes"
            },
            {
              title: "Bike rent",
              value: "yes"
            },
            {
              title: "Guide",
              value: "yes"
            },
            {
              title: "Mechanical Assistance",
              value: "yes"
            },
            {
              title: "7 lunches",
              value: "yes"
            },
            {
              title: "7 Dinners",
              value: "yes"
            },
            {
              title: "Personal Accident Insurance",
              value: "yes"
            },
            {
              title: "Liability Insurance",
              value: "yes"
            },
            {
              title: "8 Nights / 9 Days ( price per person)",
              value: "1.860 €"
            },
            {
              title: "July, August and September Prices",
              value: "+ 100 €"
            },
            {
              title: "Min. Participants",
              value: "2"
            }
          ]
        },
        type: "1",
        price: 1860,
        discount: -1,
        highSeasonPriceSupplement: 100
      },
      {
        en: {
          package: "Fully Guided Biketour",
          packageContents: [
            {
              title: "Accommodations W/ Breakfast",
              value: "Yes (3 and 4 stars, farms or rural houses)",
              icon: "✓"
            },
            {
              title: "Luggage shuttling",
              value: "yes"
            },
            {
              title: "Porto Airport Transfers",
              value: "yes"
            },
            {
              title: "Trains or Bus Tickets",
              value: "yes"
            },
            {
              title: "Van Support",
              value: "yes"
            },
            {
              title: "GPS With route per booking",
              value: "yes"
            },
            {
              title: "Bike rent",
              value: "yes"
            },
            {
              title: "Guide",
              value: "yes"
            },
            {
              title: "Mechanical Assistance",
              value: "yes"
            },
            {
              title: "7 lunches",
              value: "yes"
            },
            {
              title: "7 Dinners",
              value: "yes"
            },
            {
              title: "Personal Accident Insurance",
              value: "yes"
            },
            {
              title: "Liability Insurance",
              value: "yes"
            },
            {
              title: "8 Nights / 9 Days ( price per person)",
              value: "1.860 €"
            },
            {
              title: "July, August and September Prices",
              value: "+ 100 €"
            },
            {
              title: "Min. Participants",
              value: "2"
            }
          ]
        },
        type: "1",
        price: 1860,
        highSeasonPriceSupplement: 100
      },
      {
        en: {
          package: "Fully Guided Biketour",
          packageContents: [
            {
              title: "Accommodations W/ Breakfast",
              value: "Yes (3 and 4 stars, farms or rural houses)",
              icon: "✓"
            },
            {
              title: "Luggage shuttling",
              value: "yes"
            },
            {
              title: "Porto Airport Transfers",
              value: "yes"
            },
            {
              title: "Trains or Bus Tickets",
              value: "yes"
            },
            {
              title: "Van Support",
              value: "yes"
            },
            {
              title: "GPS With route per booking",
              value: "yes"
            },
            {
              title: "Bike rent",
              value: "yes"
            },
            {
              title: "Guide",
              value: "yes"
            },
            {
              title: "Mechanical Assistance",
              value: "yes"
            },
            {
              title: "7 lunches",
              value: "yes"
            },
            {
              title: "7 Dinners",
              value: "yes"
            },
            {
              title: "Personal Accident Insurance",
              value: "yes"
            },
            {
              title: "Liability Insurance",
              value: "yes"
            },
            {
              title: "8 Nights / 9 Days ( price per person)",
              value: "1.860 €"
            },
            {
              title: "July, August and September Prices",
              value: "+ 100 €"
            },
            {
              title: "Min. Participants",
              value: "2"
            }
          ]
        },
        type: "1",
        price: 1860,
        highSeasonPriceSupplement: 100
      }
    ],
    itinerary: [
      {
        day: "1",
        title: "1",
        location: '{"type":"Point","coordinates":[36.7382812,15.2841851]}'
      }
    ],
    minAge: -2,
    order: -2,
    date: "2019-10-17T22:02:14.660Z",
    ratingCount: 1,
    groupSizeMin: 1,
    skillLevel: 1,
    duration: 1,
    distance: 1,
    physicality: 1,
    ratingLink: "1",
    durationUnit: "1",
    title: "1",
    subTitle: "Tour porto",
    tags: ["1"],
    distanceUnit: "1",
    image: "/img/Specialized-diverge-e5-2-2.jpg",
    difficulty: 1,
    description: "1",
    rating: 1
  };

  const packagePricing = tour.pricing
    .filter(p => p.en)
    .map(p => p.en.packageContents.map(pc => pc.title))
    .flat()
    .distinct();

  return (
    <div>
      <div
        id="pt-pricing-table"
        className="crpt-flat crpt-flat-candlelight pt-animation-default"
      >
        <div className="pt-cols pt-cols-3">
          <div className="pt-cols-side">
            <div className="pt-list-block">
              <div className="pt-list-item">
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
              <div className="pt-list-item">SSL certificate</div>
            </div>
          </div>
          <div className="pt-cols-main">
            <div className="pt-col">
              <div className="pt-block">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Self Guided
                  <br />
                  bike tour
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">Free</span>
                </div>
                <a className="pt-btn" href="#">
                  Get it now
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">90 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Luggage shuttling
                        </span>
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
                    <div className="pt-value">40GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
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
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16" />
                                99.99% Uptime
                              </span>
                              <span>
                                <Check size="17" />
                                Power Redundancy
                              </span>
                              <span>
                                <Check size="17" />
                                Fast &amp; simple
                              </span>
                              <span>
                                <X size="17" />
                                16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">2GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Trains or Bus Tickets
                        </span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
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
                    <div className="pt-value">5</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">SiteLock Pro</span>
                        <span className="pt-tooltip pt-tooltip-bottom">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">
                      <X size="17" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-col">
              <div className="pt-block">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Fully Guided
                  <br />
                  Biketour
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">Free</span>
                </div>
                <a className="pt-btn" href="#">
                  Get it now
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">90 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Luggage shuttling
                        </span>
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
                    <div className="pt-value">40GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
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
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16" />
                                99.99% Uptime
                              </span>
                              <span>
                                <Check size="17" />
                                Power Redundancy
                              </span>
                              <span>
                                <Check size="17" />
                                Fast &amp; simple
                              </span>
                              <span>
                                <X size="17" />
                                16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">2GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Trains or Bus Tickets
                        </span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
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
                    <div className="pt-value">5</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">SiteLock Pro</span>
                        <span className="pt-tooltip pt-tooltip-bottom">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">
                      <X size="17" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-col">
              <div className="pt-block">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Supported Guided
                  <br />
                  Biketour
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">Free</span>
                </div>
                <a className="pt-btn" href="#">
                  Get it now
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">90 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Luggage shuttling
                        </span>
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
                    <div className="pt-value">40GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
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
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16" />
                                99.99% Uptime
                              </span>
                              <span>
                                <Check size="17" />
                                Power Redundancy
                              </span>
                              <span>
                                <Check size="17" />
                                Fast &amp; simple
                              </span>
                              <span>
                                <X size="17" />
                                16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">2GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          Trains or Bus Tickets
                        </span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
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
                    <div className="pt-value">5</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">SiteLock Pro</span>
                        <span className="pt-tooltip pt-tooltip-bottom">
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
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17" />
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">
                      <X size="17" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="pt-col">
              <div className="pt-block pt-selected">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Teams &amp;
                  <br />
                  agencies
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">100</span>{" "}
                  <span className="pt-price-rest">
                    <span className="pt-currency">$</span>
                    <br />
                    <span className="pt-sub">/wk</span>
                  </span>
                </div>
                <a className="pt-btn" href="#">
                  Buy
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast	
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">200 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Luggage shuttling</span>
                        <span className="pt-tooltip pt-tooltip-right-bottom">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">100GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
                        <span className="pt-tooltip pt-tooltip-right">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">4GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Trains or Bus Tickets</span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
                            <span className="pt-tooltip-list">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">10</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">SiteLock Pro</span>
                        <span className="pt-tooltip pt-tooltip-bottom">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">
                      <X size="17"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-col">
              <div className="pt-block">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Companies
                  <br />
                  &amp; agencies
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">239</span>{" "}
                  <span className="pt-price-rest">
                    <span className="pt-currency">€</span>
                    <br />
                    <span className="pt-sub">/mo</span>
                  </span>
                </div>
                <a className="pt-btn" href="#">
                  Purchase
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast	
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">300 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Luggage shuttling</span>
                        <span className="pt-tooltip pt-tooltip-right-bottom">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">140GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
                        <span className="pt-tooltip pt-tooltip-right">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">6GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Trains or Bus Tickets</span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
                            <span className="pt-tooltip-list">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">20</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">SiteLock Pro</span>
                        <span className="pt-tooltip pt-tooltip-bottom">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">Positive SSL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-col">
              <div className="pt-block pt-not-available">
                <div className="pt-back"></div>
                <div className="pt-title">
                  Best for
                  <br />
                  businesses
                </div>
                <div className="pt-price-block">
                  <span className="pt-price-main">399</span>{" "}
                  <span className="pt-price-rest">
                    <span className="pt-currency">£</span>
                    <br />
                    <span className="pt-sub">/mo</span>
                  </span>
                </div>
                <a className="pt-btn" href="#">
                  Purchase
                  <span className="pt-icon">
                    <span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <div className="pt-list">
                  <div className="pt-list-item">
                    <div className="pt-text">
                      Accommodations W/ Breakfast	
                      <span className="pt-tooltip-show-icon">
                        <span className="pt-tooltip-show">
                          <i className="fa fa-info-circle"></i>
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse vitae commodo quam, non auctor
                            dui. Quisque at ipsum at lorem accumsan viverra quis
                            maximus eros.
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">400 Million</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Luggage shuttling</span>
                        <span className="pt-tooltip pt-tooltip-right-bottom">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">500GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">RAM</span>
                        <span className="pt-tooltip pt-tooltip-right">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">16GB</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">Trains or Bus Tickets</span>
                        <span className="pt-tooltip pt-tooltip-right-top">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For a company
                            </span>
                            <span className="pt-tooltip-list">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="pt-value">40</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">Van Support</div>
                    <div className="pt-value">1</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">promise</div>
                    <div className="pt-value">
                      <span className="pt-tooltip-show-text">
                        <span className="pt-tooltip-show">
                          refund guarantee
                        </span>
                        <span className="pt-tooltip">
                          <span className="pt-tooltip-content">
                            <span className="pt-tooltip-heading">
                              For you and your friend
                            </span>
                            <span className="pt-tooltip-list pt-tooltip-2col">
                              <span>
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17"/>PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
                              </span>
                              <span>
                                <Check size="17"/>Power Redundancy
                              </span>
                              <span>
                                <Check size="17"/>Fast &amp; simple
                              </span>
                              <span>
                                <X size="17"/>16/7 support
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">support</div>
                    <div className="pt-value">16/7</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">security</div>
                    <div className="pt-value">SiteLock Enterprise</div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">cPanel</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SiteLock CDN</div>
                    <div className="pt-value">
                      <Check size="17"/>
                    </div>
                  </div>
                  <div className="pt-list-item">
                    <div className="pt-text">SSL certificate</div>
                    <div className="pt-value">Wildcard SSL</div>
                  </div>
                </div>
              </div>
            </div>
           */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default TourPricing;
