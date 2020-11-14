import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        
        This project is created by Francesca McCall and is{" "}
          <a href="https://github.com/Lucchetta/react-weather-app"
        target="_blank">
          open-source on github
        </a>

      
      </footer>
    
      </div>
    </div>
  );
}

