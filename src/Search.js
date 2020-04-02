import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <input
        type="search"
        placeholder="Where to?"
        autocomplete="off"
        autofocus="on"
        className="search-input"
      />
      <input type="go" value="Search" className="search-btn" />
    </div>
  );
}
