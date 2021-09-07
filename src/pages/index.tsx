import React, { useState } from "react";
import loadable from "@loadable/component";

const ComponentA = loadable(
  () => import("../components/componentA/componentA")
);
const ComponentB = loadable(
  () => import("../components/componentB/componentB")
);

// markup
const IndexPage = () => {
  const [hasComponentA, setHasComponentA] = useState(false);
  const [hasComponentB, setHasComponentB] = useState(false);

  return (
    <div>
      <h1>Welcome to Gatsby v3 Toy</h1>
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
      <div>{hasComponentA ? <ComponentA></ComponentA> : null}</div>
      <div>{hasComponentB ? <ComponentB></ComponentB> : null}</div>
    </div>
  );
};

export default IndexPage;
