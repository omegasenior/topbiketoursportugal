import React from "react";
import { Check } from "styled-icons/boxicons-regular/Check";
import { X } from "styled-icons/boxicons-regular/X";
import { CalendarCheck } from "styled-icons/boxicons-regular/CalendarCheck";
import { TimeFive } from "styled-icons/boxicons-regular/TimeFive";
import "./tourPricing.mod.scss";

export default function() {
  return (
    <div>
      <div
        id="pt-pricing-table"
        className="crpt-flat crpt-flat-candlelight pt-animation-default"
      >
        <div className="pt-cols pt-cols-4">
          <div className="pt-cols-side">
            <div className="pt-list-block">
              <div className="pt-list-item">
                visits/mounth
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
                  <span className="pt-tooltip-show">storage</span>
                  <span className="pt-tooltip pt-tooltip-right-bottom">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">
                        For you and your friend
                      </span>
                      <span className="pt-tooltip-list pt-tooltip-2col">
                        <span>
                          <CalendarCheck size="16"/>Free Daily
                          Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16"/>99.99% Uptime
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
                  <span className="pt-tooltip-show">RAM</span>
                  <span className="pt-tooltip pt-tooltip-right">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">
                        For you and your friend
                      </span>
                      <span className="pt-tooltip-list pt-tooltip-2col">
                        <span>
                          <CalendarCheck size="16"/>Free Daily
                          Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16"/>99.99% Uptime
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
                  <span className="pt-tooltip-show">ManageWP sites</span>
                  <span className="pt-tooltip pt-tooltip-right-top">
                    <span className="pt-tooltip-content">
                      <span className="pt-tooltip-heading">For a company</span>
                      <span className="pt-tooltip-list">
                        <span>
                          <CalendarCheck size="16"/>Free Daily
                          Backup
                        </span>
                        <span>
                          <Check size="16" />
                          PhpMyAdmin
                        </span>
                        <span>
                          <TimeFive size="16"/>99.99% Uptime
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
              <div className="pt-list-item">included domains</div>
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
                  For small
                  <br />
                  businesses
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                    <div className="pt-text">included domains</div>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                  For small
                  <br />
                  businesses
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                    <div className="pt-text">included domains</div>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                  For small
                  <br />
                  businesses
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                    <div className="pt-text">included domains</div>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                  For small
                  <br />
                  businesses
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="17" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                    <div className="pt-text">included domains</div>
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
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                                <CalendarCheck size="16"/>Free
                                Daily Backup
                              </span>
                              <span>
                                <Check size="16" />
                                PhpMyAdmin
                              </span>
                              <span>
                                <TimeFive size="16"/>99.99% Uptime
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                    <div className="pt-text">included domains</div>
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                    <div className="pt-text">included domains</div>
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
                      visits/mounth
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
                        <span className="pt-tooltip-show">storage</span>
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
                        <span className="pt-tooltip-show">ManageWP sites</span>
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
                    <div className="pt-text">included domains</div>
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
