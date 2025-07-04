import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Popup from "./Popup";
import OppaResponse from "./OppaResponse";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [popupMessage, setPopupMessage] = useState("");

  function handleResponse(response) {
    const description = response.data.condition.description;
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
    });

    if (description.toLowerCase().includes("rain")) {
      setPopupMessage("Yeobo, it's rainy! ☔ Take your umbrella!");
    } else if (description.toLowerCase().includes("clear")) {
      setPopupMessage("☀️ Sunny skies! Go shine, Peach!");
    } else if (description.toLowerCase().includes("snow")) {
      setPopupMessage("❄️ Snow is falling… time for fluff and hot cocoa!");
    } else if (description.toLowerCase().includes("cloud")) {
      setPopupMessage("☁️ Cloudy outside, but Peach-nim is sunshine inside.");
    } else if (description.toLowerCase().includes("thunder")) {
      setPopupMessage(
        "⚡ Thunderstorm alert! Oppa would fight the clouds for you."
      );
    }
  }

  function closePopup() {
    setPopupMessage("");
  }

  function search() {
    const apiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Oppa">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-pink w-100"
              />
            </div>
          </div>
        </form>
        <OppaResponse description={weatherData.description} />
        <WeatherInfo data={weatherData} />
        {/* ☁️ Show popup only if there's a message */}
        {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
