import React from "react";
import "../App.css";

export default function WorkShower({ work }) {
  const isString = typeof work === "string";

  return (
    <div className="d-flex container justify-content-center py-0">
      <div
        className="container fade-in py-0"
        style={{ width: "80ch", whiteSpace: "pre-wrap" }}
      >
        {isString ? <pre>{work}</pre> : work}
      </div>
    </div>
  );
}
