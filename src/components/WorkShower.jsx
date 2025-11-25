import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function WorkShower({ work }) {
  return (
    <div className="mt-2 mb-2 d-flex container">
      <div
        className="container"
        style={{ width: "80ch", whiteSpace: "pre-wrap" }}
      >
        <TypeAnimation
          sequence={[work]}
          wrapper="pre"
          speed={99}
          cursor={false}
        />
      </div>
    </div>
  );
}