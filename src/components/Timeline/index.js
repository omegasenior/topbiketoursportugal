import React from "react";
import "./timeline.scss";
export const Timeline = ({ timeline }) => (
  <div class="page">
    <div class="timeline">
      <div class="timeline__group">
        <span class="timeline__year">2008</span>
        <div class="timeline__box">
          <div class="timeline__date">
            <span class="timeline__day">2</span>
            <span class="timeline__month">Feb</span>
          </div>
          <div class="timeline__post">
            <div class="timeline__content">
              <p>
                Attends the Philadelphia Museum School of Industrial Art.
                Studies design with Alexey Brodovitch, art director at Harper's
                Bazaar, and works as his assistant.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__box">
          <div class="timeline__date">
            <span class="timeline__day">1</span>
            <span class="timeline__month">Sept</span>
          </div>
          <div class="timeline__post">
            <div class="timeline__content">
              <p>
                Started from University of Pennsylvania. This is an important
                stage of my career. Here I worked in the local magazine. The
                experience greatly affected me
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline__group">
        <span class="timeline__year">2014</span>
        <div class="timeline__box">
          <div class="timeline__date">
            <span class="timeline__day">14</span>
            <span class="timeline__month">Jul</span>
          </div>
          <div class="timeline__post">
            <div class="timeline__content">
              <p>
                Travels to France, Italy, Spain, and Peru. After completing
                fashion editorial in Lima, prolongs stay to make portraits of
                local people in a daylight studio
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline__group">
        <span class="timeline__year">2016</span>
        <div class="timeline__box">
          <div class="timeline__date">
            <span class="timeline__day">28</span>
            <span class="timeline__month">Aug</span>
          </div>
          <div class="timeline__post">
            <div class="timeline__content">
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
