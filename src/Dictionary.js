import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(showDefinition);
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <form className="row justify-content-center" onSubmit={searchWord}>
        <div className="col-auto">
          <input
            type="search"
            placeholder="Start here..."
            autoFocus="yes"
            autoComplete="yes"
            className="form-control search-form"
            onChange={handleWord}
          />
        </div>
        <div className="col-auto">
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-dark"
          />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
