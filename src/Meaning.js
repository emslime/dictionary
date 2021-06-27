import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <span className="part">{props.meaning.partOfSpeech}</span>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="definition">{definition.definition}</span>
            <br />
            <span className="example">
              <em>{definition.example}</em>
            </span>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

//<br />
//<span className="synonyms">
//<strong>similar:</strong> {definition.synonyms}
//</span>
