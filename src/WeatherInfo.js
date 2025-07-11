import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={60} />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
            <li>Real Feel: {Math.round(props.data.feels_like)} °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
