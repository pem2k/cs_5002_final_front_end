import React from "react";
import "../App.css";

export default function WorkShower({ work }) {
  const isString = typeof work === "string";

  return (
    <div className="mt-1 d-flex container justify-content-center">
      <div
        className="container fade-in"
        style={{ width: "80ch", whiteSpace: "pre-wrap" }}
      >
        {isString ? <pre>{work}</pre> : work}
      </div>
    </div>
  );
}
