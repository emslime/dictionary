import React from "react";
import "./meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <i className="part">{props.meaning.partOfSpeech}</i>{" "}
      <span className="definition">
        {props.meaning.definitions[0].definition}
      </span>
    </div>
  );
}
