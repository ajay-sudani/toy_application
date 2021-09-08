import React, { useState } from "react";
import loadable from "@loadable/component";
import { graphql, useStaticQuery } from "gatsby";
const ComponentA = loadable(
  () => import("../components/componentA/ComponentA")
);
const ComponentB = loadable(
  () => import("../components/componentB/componentB")
);
const Toys = loadable(() => import("../components/toys/Toys"));
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

  const [hasComponentA, setHasComponentA] = useState(false);
  const [hasComponentB, setHasComponentB] = useState(false);

  return (
    <div className="container">
      <h1>Welcome to Gatsby v3 Toy</h1>
      <section className="loadable">
        <h3>Demo for loadable component</h3>
        <div>
          <label>Component A</label>
          <input
            type="checkbox"
            onChange={(event) => {
              setHasComponentA(event.target.checked);
            }}
          />
        </div>
        <div>
          <label>Component B</label>
          <input
            type="checkbox"
            onChange={(event) => {
              setHasComponentB(event.target.checked);
            }}
          />
        </div>
        {/* <div>{hasComponentA ? <ComponentA></ComponentA> : null}</div> */}
        <div>{hasComponentB ? <ComponentB></ComponentB> : null}</div>
      </section>
      <section>
        <Toys data={data.allContentfulToy.edges}></Toys>
      </section>
    </div>
  );
};

export default IndexPage;
