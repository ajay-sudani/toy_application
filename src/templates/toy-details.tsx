import React from "react";
import { InView } from "react-intersection-observer";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "./toy-details.scss";

// markup
const ToyDetails = ({ data }) => {
  const imageData = data.backgroundImage.childImageSharp.fluid;
  const { contentfulToy: toy } = data;

  return (
    <BackgroundImage Tag="section" fluid={imageData}>
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
    </BackgroundImage>
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
    backgroundImage: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ToyDetails;
