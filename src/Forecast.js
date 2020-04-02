import React from "react";
import ForecastColumn from "./ForecastColumn";

export default function Forecast() {
  return (
    <div className="container forecast">
      <div className="row">
        <div class="col-2">
          <ForecastColumn />
        </div>
        <div class="col-2">
          <ForecastColumn />
        </div>
        <div class="col-2">
          <ForecastColumn />
        </div>
        <div class="col-2">
          <ForecastColumn />
        </div>
        <div class="col-2">
          <ForecastColumn />
        </div>
      </div>
    </div>
  );
}
