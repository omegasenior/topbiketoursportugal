import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-animated-slider';
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

const reviews=[
    {
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    },
    {
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:"7-Day The Way of St James Bike Tour The Coast Path Easy to Moderate",
        rating:5,
        date:" May 2018",
        source:"https://www.tripadvisor.co.uk/ShowUserReviews-g189180-d4105907-r585303227-Top_Bike_tours_Portugal-Porto_Porto_District_Northern_Portugal.html"
    },
    {
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    },
    {
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    },
    {
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    },{
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    },{
        quote:"I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically \"on your own\" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.",
        author:"Earl",
        country:"USA",
        tour:""
    }


];

export default class ReviewsHighlights extends React.Component {
    render() {
        return (
            <div>
                <h2>What People Are Saying</h2>
                <div>
                    <blockquote>
                        <cite>Earl</cite>, USA
                    </blockquote>
                </div>
            </div>
        )
    }
}