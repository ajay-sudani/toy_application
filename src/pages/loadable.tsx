import React,{useState} from "react";
import loadable from "@loadable/component";
const ComponentA = loadable(() => import("../components/componenta/Componenta"));
const ComponentB = loadable(() => import("../components/componentb/Componentb"));

// markup
const LoadablePage = () => {
  const [hasComponentA, setHasComponentA] = useState(false);
  const [hasComponentB, setHasComponentB] = useState(false);
  return (
    <div className="container">
      <h1>Welcome to Gatsby v3 Loadable</h1>
      <section>
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
        <div>{hasComponentA ? <ComponentA></ComponentA> : null}</div>
        <div>{hasComponentB ? <ComponentB></ComponentB> : null}</div>
      </section>
    </div>
  );
};

export default LoadablePage;
