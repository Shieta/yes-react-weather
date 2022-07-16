import React from "react";

export default function Header() {
  return (
    <div className="row header">
      <div className="col-6">
        <h1>Weather</h1>
      </div>
      <div className="col-2">
        <div
          className="btn-group celsius-farenheit"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-primary">
            °C
          </button>
          <button type="button" className="btn btn-outline-primary">
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
