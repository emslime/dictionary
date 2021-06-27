import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <span className="badge rounded-pill bg-dark">{synonym}</span>{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
