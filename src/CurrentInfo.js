import React from "react";

import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";

import "./CurrentInfo.css";

export default function currentInfo() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-6">
          <InfoLeft />{" "}
        </div>
        <div class="col-6">
          <InfoRight />
        </div>
      </div>
    </div>
  );
}
