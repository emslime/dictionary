import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <i className="fas fa-book-open"></i> What's this?
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer>
          <a
            href="https://github.com/emslime/dictionary"
            target="_blank"
            rel="noreferrer"
            className="git-link"
          >
            open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.instagram.com/emslime"
            target="_blank"
            rel="noreferrer"
            className="emslime"
          >
            em
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
