import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("flower");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function showImages(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(showDefinition);

    let pexelsApiKey =
      "563492ad6f91700001000001421e76165a4a47febf722ee072cea565";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(showImages);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form className="row justify-content-center" onSubmit={handleSubmit}>
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
            <input type="submit" value="Search" className="btn btn-outline" />
          </div>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
