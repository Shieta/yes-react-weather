import React, { useState } from "react";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [loader, setLoader] = useState(false);
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoader(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row form">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city here"
            className="input form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Select city"
            className="submit btn btn-primary"
          />
        </div>
      </div>
    </form>
  );

  if (loader) {
    return (
      <div className="weather">
        {form}
        <h2>
          Today in {city} <br />
          Tuesday 05.04.2022
        </h2>
        <div className="row">
          <div className="col-6">
            <div className="temperature-today">10°C /20°C</div>
          </div>
          <div className="col-2">
            <Forecast
              icon="CLEAR_DAY"
              color="goldenrod"
              size="50"
              animate="true"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{form};</div>;
  }
}
