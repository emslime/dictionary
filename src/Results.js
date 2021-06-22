import React from "react";
import Meaning from "./Meaning";
import "./results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h2>
          <span className="word">{props.results.word}</span>
          <br />
          <span className="phonetics">{props.results.phonetics[0].text}</span>
        </h2>
        <h4 className="meaning">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </h4>
      </div>
    );
  } else {
    return null;
  }
}
