import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function defineWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form className="row justify-content-center" onSubmit={searchWord}>
        <div className="col-auto">
          <input
            type="search"
            placeholder="Dictionary"
            autoFocus="yes"
            autoComplete="yes"
            className="form-control search-form"
            onChange={defineWord}
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
    </div>
  );
}
