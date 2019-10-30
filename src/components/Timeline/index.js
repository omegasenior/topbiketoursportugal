import React from "react";
import "./timeline.scss";
export const Timeline = ({ timeline }) => (
  <div className="page">
    <div className="timeline">
      <div className="timeline__group">
        <span className="timeline__year">2008</span>
        <div className="timeline__box">
          <div className="timeline__date">
            <span className="timeline__day">2</span>
            <span className="timeline__month">Feb</span>
          </div>
          <div className="timeline__post">
            <div className="timeline__content">
              <p>
                Attends the Philadelphia Museum School of Industrial Art.
                Studies design with Alexey Brodovitch, art director at Harper's
                Bazaar, and works as his assistant.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__box">
          <div className="timeline__date">
            <span className="timeline__day">1</span>
            <span className="timeline__month">Sept</span>
          </div>
          <div className="timeline__post">
            <div className="timeline__content">
              <p>
                Started from University of Pennsylvania. This is an important
                stage of my career. Here I worked in the local magazine. The
                experience greatly affected me
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline__group">
        <span className="timeline__year">2014</span>
        <div className="timeline__box">
          <div className="timeline__date">
            <span className="timeline__day">14</span>
            <span className="timeline__month">Jul</span>
          </div>
          <div className="timeline__post">
            <div className="timeline__content">
              <p>
                Travels to France, Italy, Spain, and Peru. After completing
                fashion editorial in Lima, prolongs stay to make portraits of
                local people in a daylight studio
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline__group">
        <span className="timeline__year">2016</span>
        <div className="timeline__box">
          <div className="timeline__date">
            <span className="timeline__day">28</span>
            <span className="timeline__month">Aug</span>
          </div>
          <div className="timeline__post">
            <div className="timeline__content">
              <p>
                Upon moving to Brooklyn that summer, I began photographing
                weddings in Chicago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
