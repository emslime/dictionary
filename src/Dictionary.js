import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [definition, setDefinition] = useState(null);

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${definition}`);
  }

  function defineWord(event) {
    setDefinition(event.target.value);
  }

  return (
    <div className="dictionary">
      <form
        className="search-form row justify-content-center"
        onSubmit={searchWord}
      >
        <div className="col-auto">
          <input
            type="search"
            placeholder="Dictionary"
            autoFocus="yes"
            autoComplete="yes"
            className="form-control"
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
