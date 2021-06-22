import React from "react";
import Meaning from "./Meaning";
import "./results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h2>{props.results.phonetics[0].text}</h2>
        <h4 className="meaning">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning />
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
