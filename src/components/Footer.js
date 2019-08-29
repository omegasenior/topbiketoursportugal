import React from 'react'
import styled from "styled-components"
import { Container } from 'styled-container-component'
import { Column, Row } from 'styled-grid-system-component'
import img1 from './../img/banners/1.jpg'

const FooterContainer = styled.footer`
    position: relative;
    background-color: #2b2b2b;
    color: #999;
    font-size: 12px;
    padding-top:30px;
    padding-bottom:30px;
`

const FooterContentContainer = styled.div`
    margin-bottom: 35px;
    font-size: 12px
`
const FooterContentTitle = styled.h4`
    font-size: 15px;
    color: #ccc;
    text-transform: uppercase;
    margin-bottom: 15px;
`

const FooterContentText = styled.p`
    outline: none !important;
    margin: 0 0 10px;
`

const FooterPostContainer = styled.div`
    display:flex;
`

const FooterPostImg = styled.img`
    width:40%;
    align-self:baseline;
`

const FooterPostSummary = styled.div`
    outline: none !important;
    margin-left: 10px;
`

export default class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <Container>
                    <Row>
                        <Column xs={1} md={4}>
                            <FooterContentContainer>
                                <FooterContentTitle>About Us</FooterContentTitle>
                                <FooterContentText>Founded in 2013, Top Bike tours Portugal is a very young company with experience in pedestrian and cycling tours in Porto and long distance cycling routes to the north of the Iberian Peninsula. Our activities are coordinated by tourism professionals, with a huge knowledge of heritage and sports.</FooterContentText>
                            </FooterContentContainer>
                        </Column>
                        <Column xs={1} md={5}>
                            <FooterContentContainer>
                                <FooterContentTitle>Latest Posts</FooterContentTitle>
                                <FooterPostContainer>
                                    <FooterPostImg src={img1} width={100} />
                                    <FooterPostSummary>This cycling tour presents itself as na easy route to reach to Santiago de Compostela, the ultimate pilgrimage beacon in the Iberian Peninsula and one of the most important spots for religious tourism in Western Europe.</FooterPostSummary>
                                </FooterPostContainer>
                            </FooterContentContainer>
                        </Column>
                        <Column xs={1} md={3}>
                            <FooterContentContainer>
                                <FooterContentTitle>Contact Info</FooterContentTitle>
                                <FooterContentText>Rua Alferes Malheiro nº 139<br />4000-057 Porto<br />Portugal<br /><br />300 m of Trindade Metro, near Oporto City Hall</FooterContentText>
                                <FooterContentText>Tel: (+351) 220 997 106<br />​Telm: (+351) 915 316 999​<br /><br />email: info@topbiketoursportugal.com</FooterContentText>
                            </FooterContentContainer>
                            <FooterContentContainer>

                            </FooterContentContainer>
                        </Column>
                    </Row>
                </Container>
            </FooterContainer >
        )
    }
}
