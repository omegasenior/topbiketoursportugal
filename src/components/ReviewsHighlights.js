import React from "react";
import styled from "styled-components";
// import LinesEllipsis from "react-lines-ellipsis";
import ReadMore from "./ReadMore";
import "./ReviewsHighlights.scss";

export const ReviewList = styled.div`
  display: flex;
`;

export const ReviewQuote = styled.blockquote`
  /* width: 33%;*/
  position: relative;
  padding-left: 0.5rem;
  border-left: 0.2rem solid #4d91b3;
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  .quote {
    text-align: justify;
    margin-bottom: 20px;
    line-height: 2rem;
  }

  .quote.collapsed::before {
    content: '"';
    color: #4d91b3;
  }
  .quote.collapsed::after {
    content: '"';
    color: #4d91b3;
  }

  cite {
    padding: 20px 0 0 20px;
  }
`;

export const ReviewContainer = styled.div`
  text-align: center;
  margin: 35px 0;
`;

export const ReviewCite = styled.cite`
  padding: 20px;
`;

const reviews = [
  {
    quote:
      'I recently completed The Way of St. James bike tour, and it could not have been a better experience. We were a large group, over twenty, but Sergio, Jose, Tiago and Pedro all worked incredibly hard to not only keep us all safe and on course but to feel personally cared for in spite of such a large group. I was one of two vegetarians on the trip, and even though lunch and dinner were technically "on your own" our guides took great care to make sure we were well fed. The route itself was beautiful and varied. The first few days were remarkable for their beautiful ocean views. Crossing into Spain, and moving inland we cycled down country roads through small town and villages, and through the woods on beautiful paths. The accommodations beat all my expectations, we stayed in some truly special hotels, a real treat after a day on the bike. The bikes were all in great shape and checked out every night. I had an issue one day with my bike not shifting properly (most likely because I knocked the derailleur after a clumsy little spill that morning) It was fixed immediately and worked perfectly for the rest of the trip.',
    author: "Earl",
    country: "USA",
    tour: ""
  },
  {
    quote:
      "We have recently completed the Silver Coast bike tour. We chose to have E Bikes but I hardly used it as virtually flat the whole way. From the first decision to do the tour we were more than happy with the communication had with Sergio. On the first morning we met Sergio in the hotel and went through the itinerary for us. We then had a bike fitting and a practice ride. This was followed by Tiago taking us on a walking tour of Porto guiding us around all the historic places of interest ending up in a local port warehouse for an explanation on the life of making Port then came the tasting. On the morning of departure Sergio rode with us out of the city and sent us on our way. All of the accommodation was 4 star and of excellent choice. The riding was flat and some small amount on roads but most on cycle ways. Interesting riding along the coast small villages large towns through fire ravaged forest beautiful beaches. Having a GPS is an advantage to help navigate some of the towns. 2nd to last day there is a challenge but once at the top of the hill amazing views both up and down the coast. We did have a problem with one of the bikes and is was no problem for Sergio to drive down and replace the bike for us. I can highly recommend Fold n Visit and like that it is a small and personal company. Thank you Sergio and Tiago it was a great experience not to be forgotten.",
    author: "Peter Birks",
    country: "New Zeland",
    tour: "Silver Coast 5 day ride plus walking tour of Porto",
    tourLink: "",
    rating: 5,
    date: " May 2018",
    source:
      "https://www.tripadvisor.co.uk/ShowUserReviews-g189180-d4105907-r585303227-Top_Bike_tours_Portugal-Porto_Porto_District_Northern_Portugal.html"
  }
];

export default class ReviewsHighlights extends React.Component {

  render() {
    return (
      <div className="containerReview">
        <div className="row">
          <div className="col-12">
            <h2 className="reviewTitle">What People Are Saying</h2>
          </div>
          {reviews.map((review, index) => (
            <div key={`review` + index} className="col-12 col-md-6">
              <ReviewQuote>
                <ReadMore>{review.quote}</ReadMore>
                <ReviewCite>
                  <cite>{review.author}</cite>, {review.country}
                </ReviewCite>
              </ReviewQuote>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// {
//   /* <ReviewQuote key={index}>
//             <TextTruncate
//               line={3}
//               element="div"
//               truncateText="…"
//               text={review.quote}
//               textTruncateChild={<Link to={"/reviews/" + index}>more</Link>}
//             />
//             <div>
//               <cite>{review.author}</cite>, {review.country}
//             </div>
//           </ReviewQuote> */
// }
