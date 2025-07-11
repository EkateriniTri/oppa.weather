import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seoul" />
      </div>
      <footer div className="Footer">
        This project was coded by{""} Katerina Tri {""}and is {""}{" "}
        <a
          href="https://github.com/EkateriniTri/oppa.weather"
          target="_blank"
          rel="noopener noreferrer">
          open-sourced on GitHub
        </a>{" "}
        {""}
        and {""}
        <a
          href="https://oppaweather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
