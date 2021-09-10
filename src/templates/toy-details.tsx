import React from "react";
import { graphql } from "gatsby";
import { InView } from "react-intersection-observer";
import "./toy-details.scss";

// markup
const ToyDetails = ({ data }) => {
  const { contentfulToy: toy } = data;
  return (
    <div className="toy-details-container">
      <div className="image-container">
        <InView>
          <img src={toy.image.file.url} alt="No image found" />
        </InView>
      </div>
      <div className="details">
        <p className="name">
          <b>{toy.name}</b>
        </p>
        <p className="description">
          {JSON.parse(toy.description.raw).content[0].content[0].value}
        </p>
        <p className="price">Price : {toy.price}</p>
        <p className="rating">Rating : {toy.rating}</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    contentfulToy(id: { eq: $id }) {
      name
      description {
        raw
      }
      image {
        file {
          url
        }
      }
      price
      rating
    }
  }
`;

export default ToyDetails;
