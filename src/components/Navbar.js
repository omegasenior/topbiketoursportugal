import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.png'

import {Nav, Navbar} from 'styled-bootstrap-components'
import Img from "gatsby-image"
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
// import { Navbar, NavbarLink } from 'styled-navbar-component';
// import { Nav } from 'styled-nav-component';
// import Waypoint from 'react-waypoint'
import styled from "styled-components"

const StyledContainer=styled(Container)`
  z-index:2;
  background:transparent!important;
  // position:fixed;
`

const StyledNavbar=styled(Navbar)`
  background:transparent!important;
  // position:fixed;
  top:0;
  a{
    color:#fff;
    margin-right:10px;
  }
  nav.fixed-nav{

    border:1px solid;
  }

`


let lastScrollY = 0;
let ticking = false;
const NavbarComponent = class extends React.Component {



  constructor(props) {
    super();
    this.state = {
      hidden: true,
      stickyNav: false,
    };
  }

  // <script>
  //               const nav = document.querySelector("nav");
  //               const navTop = nav.offsetTop;

  //               function handleScroll() {
  //                 if (window.scrollY > navTop) {
  //                   nav.classList.add("fixed-nav");
  //                   document.body.style.paddingTop = nav.offsetHeight+'px';
  //                 } else {
  //                   nav.classList.remove('fixed-nav');
  //                   document.body.style.paddingTop = 0;
  //                 }
  //               }

  //               window.addEventListener('scroll', handleScroll);

  //         </script>

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    //if (window.scrollY > navTop) {
      //                   nav.classList.add("fixed-nav");
      //                   document.body.style.paddingTop = nav.offsetHeight+'px';
      //                 } else {
      //                   nav.classList.remove('fixed-nav');
      //                   document.body.style.paddingTop = 0;
      //                 }

    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if(lastScrollY>1)
        {
          this.nav.current.classList.add("fixed-nav");
        }
        else{
          this.nav.current.classList.remove("fixed-nav");
        }
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });
   
      ticking = true;
    }
  };

  nav = React.createRef();

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    var hidden=this.state.hidden;
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
        <StyledContainer fluid>
          <StyledNavbar expandSm>
            <Nav ref={this.nav}>
              <Link to="/"><Img fixed={data.file.childImageSharp.fixed} alt="Top Bike Tours Portugal" /></Link>
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
            <Nav collapse expandSm hidden={hidden}>
              <Link to="/bike-hollidays">Bike Holidays</Link>
              <Link to="/tour-calendar">Calendar</Link>
              <Link to="/city-tours">City Tours</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/rental">Rental</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </Nav>
          </StyledNavbar>
        </StyledContainer>
      )}
    />
    )
  }
}

export default NavbarComponent