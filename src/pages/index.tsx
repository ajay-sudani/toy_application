import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Toys from "../components/toys/toys";
import "../assets/styles/index.scss";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ToysQuery {
      allContentfulToy {
        edges {
          node {
            id
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
      }
    }
  `);

  return (
    <div className="container">
      <h1>Welcome to Gatsby v3 Toy</h1>
      <section>
        <Toys data={data.allContentfulToy.edges}></Toys>
      </section>
    </div>
  );
};

export default IndexPage;
