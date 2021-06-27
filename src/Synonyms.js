import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <strong>Similar: </strong>{" "}
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} ∙ </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
