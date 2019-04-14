import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.png'
import Img from "gatsby-image"


const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    return (
      <StaticQuery
      query={graphql`
        query LogoQuery {
            file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 208, height: 143) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
      `}
      render={data => (
        <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <Img fixed={data.file.childImageSharp.fixed} alt="Top Bike Tours Portugal" />
              </Link>
              {/* Hamburger menu */}
              <div className="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/bike-hollidays">Bike Holidays</Link>
                <Link className="navbar-item" to="/tour-calendar">Calendar</Link>
                <Link className="navbar-item" to="/city-tours">City Tours</Link>
                <Link className="navbar-item" to="/blog">Blog</Link>
                <Link className="navbar-item" to="/rental">Rental</Link>
                <Link className="navbar-item" to="/contact">Contact</Link>
                <Link className="navbar-item" to="/about">About</Link>
                {/* <Link className="navbar-item" to="/contact/examples">Form Examples</Link> */}
              </div>
            </div>
          </div>
        </nav>
      )}
    />
    )
  }
}

export default Navbar
