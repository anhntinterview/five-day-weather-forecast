import React, { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";

const FiveDayWeather = () => {
  const { weatherState } = useContext(LocationContext);
  const { isLoaded, result, status, err } = weatherState;
  let lct, fd;
  if (isLoaded) {
    fd = result.data.forecast.forecastday;
    lct = result.data.location;
  }
  return status ? (
    status === "pending" ? (
      <img
        className="loading-img"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif"
      />
    ) : (
      (status === "done") ?
      (
      <div className="wrapper">
        <div className="city">
          <h2>
            City: {lct.name} - Country: {lct.country}
          </h2>
        </div>
        <div className="list">
          <ul>
            {fd.map((item) => (
              <li key={item.date_epoch}>
                <div className="date balance">
                  <div className="title">Date: </div>
                  <div>{item.date}</div>
                </div>
                <div className="day">
                  <h4>Temperature</h4>
                  <div className="atr balance">
                    <div className="title">MAX: </div>
                    <div>
                      {item.day.maxtemp_c} °C | {item.day.maxtemp_f} °F
                    </div>
                  </div>
                  <div className="atr balance">
                    <div className="title">MIN: </div>
                    <div>
                      {item.day.mintemp_c} °C | {item.day.maxtemp_f} °F
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )
      : <div className="error empty">{err && 'No matching location found'}</div>
    )
  ) : (
    <div className="empty">Data empty</div>
  );
};

export default FiveDayWeather;
