import React from "react";
import "./App.css";
import Search from "./Search";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentInfo />
      <Forecast />
    </div>
  );
}

export default App;
