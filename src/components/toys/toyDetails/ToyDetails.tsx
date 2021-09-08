import * as React from "react";
import { InView } from "react-intersection-observer";
import "./ToyDetails.scss";

// markup
const ToyDetails = ({ toy }) => {
  return (
    <div className="toy-content">
      <div className="image-container">
        <InView>
          <img src={toy.image.file.url} alt="No image found" />
        </InView>
      </div>
      <div className="details">
        <p className="price">
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

export default ToyDetails;
