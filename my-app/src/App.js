import "./styles.css";

import Heather from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Heather />

            <Weather />
            <div className="row">
              <div className="col-2">
                <Forecast icon="RAIN" color="blue" size="50" animate="true" />
              </div>
              <div className="col-2">
                <Forecast icon="WIND" color="blue" size="50" animate="true" />
              </div>
              <div className="col-2">
                <Forecast
                  icon="CLEAR_DAY"
                  color="blue"
                  size="50"
                  animate="true"
                />
              </div>
              <div className="col-2">
                <Forecast icon="FOG" color="blue" size="50" animate="true" />
              </div>
              <div className="col-2">
                <Forecast icon="SLEET" color="blue" size="50" animate="true" />
              </div>
              <div className="col-2">
                <Forecast icon="SNOW" color="blue" size="50" animate="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/Shieta/yes-react-weather"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>{" "}
      by Shienny
    </div>
  );
}
