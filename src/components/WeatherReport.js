// WeatherReport Component
import React from "react";

const WeatherReport = () => {
  return <>
    <div className="weather-report">
      <h2 className="big">Los Angeles</h2>
      <h3 className="conditions">Clear Sky</h3>
      <img src="" alt="alt img"></img>
      <div className="temperature">
        <div>
          <p>CURRRENT TEMPERATURE</p>
          <h2>14℃</h2>
        </div>
        <div>
          <p>MAXIMUM TEMPERATURE</p>
          <h2>11℃</h2>
        </div>
        <div>
          <p>MINIMUM TEMPERATURE</p>
          <h2>17℃</h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>WIND SPEED</p>
          <h2>0.25 meter/sec</h2>
        </div>
        <div>
          <p>WIND SPEED</p>
          <h2>243 degrees</h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>PRESSURE</p>
          <h2>1018 hpa</h2>
        </div>
        <div>
          <p>HUMIDITY</p>
          <h2>77 %</h2>
        </div>
      </div>
    </div>

  </>;
};

export default WeatherReport;
