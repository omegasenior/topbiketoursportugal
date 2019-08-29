import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Slider from "react-animated-slider";
// import sliderStyle from '../../node_modules/react-animated-slider/build/horizontal.css';
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

// const StyledBackgroundImage = styled(BackgroundImage)`
//  	  display: flex;
// 		align-items: center;
// 		justify-content: center;
//  `

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  flex-direction: row;
  text-align: center;
  margin-top: 5px;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  transition: all 0.3s ease;
  transform: translateY(-20px);
  opacity: 0;
  text-shadow: 2px 2px 5px #222;
`;

const Subtitle = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 0 70px;
  color: #fff;
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  text-shadow: 1px 2px 1px #222;
`;

const Action = styled.button`
  font-size: 16px;
  text-align: center;
  appearance: none;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
  border: none;
  background: #ffd800;
  border-radius: 30px;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 15px 40px;
  font-weight: 400;
  font-size: 13px;
  cursor: cursor;
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // background-size: 150%;
  z-index: 1;
  & a {
    &.previousButton,
    &.nextButton {
      font-size: 22px;
      line-height: 0;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s linear;
      z-index: 1;
      color: #333;
      padding: 10px;
      text-decoration: none;
      backface-visibility: hidden; /* prevent jump effect when scaling */

      &:not(.disabled):hover {
        transform: translateY(-50%) scale(1.25);
        cursor: pointer;
      }
    }

    &.previousButton {
      left: 20px;
    }

    &.nextButton {
      right: 20px;
    }
  }

  .gatsby-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    &.hidden {
      visibility: hidden;
    }

    &.previous {
      left: -100%;
    }

    &.current {
      left: 0;
    }

    &.next {
      left: 100%;
    }

    &.animateIn,
    &.animateOut {
      transition: all 1s ease;
    }

    &.animateIn {
      &.previous,
      &.next {
        left: 0;
        visibility: visible;
      }
    }

    &.animateOut {
      &.previous {
        left: 100%;
      }

      &.next {
        left: -100%;
      }
    }
  }

  // .slide p {
  // 	transition: all 0.3s ease;
  // 	transform: translateY(20px);
  // 	opacity: 0;
  // }

  // .slide section * {
  // 	transition: all 0.3s ease;
  // }

  .slide section img {
    transform: translateX(-10px);
    opacity: 0;
  }

  .slide section span {
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide section span strong {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide.animateIn.previous h1,
	.slide.current h1,
	.slide.animateIn.next h1,
	.slide.animateIn.previous button,
	.slide.current button,
	.slide.animateIn.next button,
	.slide.animateIn.previous p,
	.slide.current p,
	.slide.animateIn.next p
	// ,
	// .slide.animateIn.previous section *,
	// .slide.current section *,
	// .slide.animateIn.next section * 
	 {
    transform: translateX(0);
    transition-delay: 0.9s;
    opacity: 1;
  }

  .slide.animateIn.previous p,
  .slide.animateIn.next p {
    transition-delay: 1.1s;
  }

  .slide.animateIn.previous button,
  .slide.animateIn.next button {
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section img,
  .slide.animateIn.next section img {
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section span,
  .slide.animateIn.next section span {
    transition-delay: 1.4s;
  }

  .slide.animateIn.previous section span strong,
  .slide.animateIn.next section span strong {
    transition-delay: 1.5s;
  }

  .slide.animateOut h1 {
    transition-delay: 0.3s;
  }

  .slide.animateOut p {
    transition-delay: 0.2s;
  }

  .slide.animateOut section span {
    transition-delay: 0.1s;
  }

  .slide.animateOut section span strong {
    transition-delay: 0s;
  }
`;

const Banner = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allBannerJson {
          edges {
            node {
              id
              title
              description
              button
              image {
                childImageSharp {
                  fluid(quality: 60, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const { edges: banners } = data.allBannerJson;
      return (
        <StyledSlider>
          {banners.map(({ node: item }) => (
            <Container key={item.id}>
              <BackgroundImage fluid={item.image.childImageSharp.fluid}>
                <Content>
                  <Title>{item.title}</Title>
                  <Subtitle>{item.description}</Subtitle>
                  <Action>{item.button}</Action>
                </Content>
              </BackgroundImage>
            </Container>
          ))}
        </StyledSlider>
      );
    }}
  />
);

function flatten(a, b) {
  return a.concat(b);
}

function getBanners(data) {
  return data.allBannerJson.edges
    .map(edge => (edge.node && edge.node.banners ? edge.node.banners : []))
    .reduce(flatten, []);
}

// function getImage(imageName, images) {
//   var imageFound = images.find(i => i.node.relativePath === imageName);

//   if (
//     imageFound &&
//     imageFound.node &&
//     imageFound.node.childImageSharp &&
//     imageFound.node.childImageSharp.fluid
//   ) {
//     return imageFound.node.childImageSharp.fluid;
//   }
//   return images[0].node.childImageSharp.fluid;
// }

export default Banner;
