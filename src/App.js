import React from "react";
import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import CurrentInfo from "./CurrentInfo";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentInfo />
    </div>
  );
}

export default App;
