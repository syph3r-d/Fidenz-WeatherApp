import React, { useEffect, useState } from "react";
import CardFooter from "../dashboard/cityCard/CardFooter";
import { images } from "../utils/images";
import { useParams } from "react-router";
import { getWeather } from "../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";

const WeatherViewCard = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [cityWeather, setCityWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setIsLoading(true);
        const res = await getWeather(city);
        setCityWeather(res);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };
    loadWeather();
  }, []);
  const colors = ["#388ee7", "#6249cc", "#40b681", "#de944e", "#9c3a3a"];

  return (
    <div className="card card-weather-view">
      <img
        className="back-img"
        src={images.back}
        alt=""
        onClick={() => navigate("/")}
      />
      {!isLoading ? (
        <>
          <div
            className="header"
            style={{
              background: "rgb(56, 142, 231)",
            }}
          >
            <div className="location">
              <h2>{`${cityWeather.name}, ${cityWeather.sys.country}`}</h2>
              <p>9.19am, Feb 8</p>
            </div>
            <div className="weather-details">
              <div className="weather-stat">
                <img
                  src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h4>{cityWeather.weather[0].description}</h4>
              </div>
              <hr className="divider" />
              <div className="temperature">
                <h1>{cityWeather.main.temp}°c</h1>
                <div className="temperature-minmax">
                  <h5>Temp Min: {cityWeather.main.temp_min}°c</h5>
                  <h5>Temp Max: {cityWeather.main.temp_max}°c</h5>
                </div>
              </div>
            </div>
          </div>
          <CardFooter data={cityWeather} />
        </>
      ) : (
        <div className="loading-container">
            <MoonLoader color={"#388ee7"} size={50} />
        </div>
      )}
    </div>
  );
};

export default WeatherViewCard;
