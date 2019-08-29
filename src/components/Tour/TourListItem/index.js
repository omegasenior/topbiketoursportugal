import PropTypes from "prop-types";
import * as Style from "./styled";
import { Column, Row } from "styled-grid-system-component";

export default function TourListItem({ tour: { title, excerpt, image } }) {
  return (
    <Style.Tour>
      <Style.ToursImageContainer>
        <Style.ToursImage src={image} height={285} />
      </Style.ToursImageContainer>
      <Style.TourTitle>{title}</Style.TourTitle>
      <Style.TourResume>{excerpt}</Style.TourResume>
      <Row>
        <Column xs="12" sm="6"></Column>
        <Column xs="12" sm="6"></Column>
      </Row>
      <Style.TourChart>
        <Style.StyledTime />
      </Style.TourChart>
    </Style.Tour>
  );
}

TourListItem.propTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.any
  })
};
