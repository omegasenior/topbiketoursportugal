import React from 'react'
import styled from "styled-components"
import { Container } from 'styled-container-component'
import { Column, Row } from 'styled-grid-system-component'
import BackgroundImage from 'gatsby-background-image'

import img1 from './../img/banners/1.jpg'
import img_tour_2 from './../img/the-way-of-saint-james.jpg'
import img_tour_3 from './../img/The-Way-of-St.-James-Bike-Tour-Fold-N-Visit-Cycling-Holidays-3582-1280x853.jpg'


import { Time } from 'styled-icons/boxicons-regular/Time'

const Tours = styled.div`

`

const Tour = styled.article`
    padding:10px;
    box-shadow: 0 0 15px 3px rgba(212,212,212,.5);
    margin: 25px 0;
    transition: all 450ms linear;
    &:hover{
        box-shadow: box-shadow: 0 0 8px 1px rgba(212,212,212,1);
        // transform: scale(1.05);
        cursor:pointer;
        img{
            transform: scale(1.6);
        }
    }
`

const TourTitle = styled.h2`
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    text-align: center;
    margin: 5px 0;
`

const TourResume = styled.p`
    font-size: 0.75rem;
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif
`
const TourChart = styled.p`

`

const ToursImageContainer = styled.div`
    overflow:hidden;
`

const ToursImage = styled.img`
    width:100%;
    transition: all .2s ease-out;
`

const Subtitle = styled.p`
    text-align: center;
    position: relative;
    margin-bottom: 30px;
`



const Title = styled.h3`
    margin-top: 30px;
    text-align: center;
    position: relative;
`

const StyledTime = styled(Time)`
    width:20px;
`

export default class Tourhighlights extends React.Component {
    render() {
        return (
            <Tours className="tourHighlights">
                <Title>Popular Tours</Title>
                <Subtitle>We have a unique way of meeting your adventurous expectations!</Subtitle>
                <Container>
                    <Row>
                        <Column xs={1} md={4} my={10}>
                            <Tour>
                                <ToursImageContainer>
                                    <ToursImage src={img_tour_3} height={185} />
                                </ToursImageContainer>
                                <TourTitle>The Silver Coast - Route 1</TourTitle>
                                <TourResume>This cycling tour of the Silver Coast, is an immersive and amazing route that starts in Porto cityand goes along the coast where you‘re going to find some of the most important villages in Portugal. Here you will have a “mix” of beaches and pine forests creating different feelings during the trip. Exploring the trails and its main highlights will give you the sense of fulfillment.</TourResume>
                                <TourChart><StyledTime /></TourChart>
                            </Tour>
                        </Column>
                        <Column xs={1} md={4}>
                            <Tour>
                                <ToursImageContainer>
                                    <ToursImage src={img_tour_2} height={185} />
                                </ToursImageContainer>
                                <TourTitle>The Way of St. James BikeTour</TourTitle>
                                <TourResume>This cycling tour presents itself as na easy route to reach to Santiago de Compostela, the ultimate pilgrimage beacon in the Iberian Peninsula and one of the most important spots for religious tourism in Western Europe.</TourResume>
                                <TourChart><StyledTime /></TourChart>
                            </Tour>
                        </Column>
                        <Column xs={1} md={4}>
                            {/* <BackgroundImage fluid={img1} height={185} /> */}
                            <Tour>
                                <ToursImageContainer>
                                    <ToursImage src={img1} height={185} />
                                </ToursImageContainer>
                                <TourTitle>The Way of St. James BikeTour</TourTitle>
                                <TourResume>This cycling tour presents itself as na easy route to reach to Santiago de Compostela, the ultimate pilgrimage beacon in the Iberian Peninsula and one of the most important spots for religious tourism in Western Europe.</TourResume>
                                <TourChart><StyledTime /></TourChart>
                            </Tour>
                        </Column>
                    </Row>
                </Container>
            </Tours>
        )
    }
}
