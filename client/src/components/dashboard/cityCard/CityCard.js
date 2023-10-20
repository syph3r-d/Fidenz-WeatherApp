import React, { useEffect, useState } from "react";
import { images } from "../../../utils/images";
import CardFooter from "./CardFooter";
import { getWeather } from "../../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import moment from "moment";

const CityCard = ({ color, city }) => {
  const navigate = useNavigate();
  const [cityWeather, setCityWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ error: false, message: "" });

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setIsLoading(true);
        const res = await getWeather(city.CityCode);
        setCityWeather(res);
        setIsLoading(false);
      } catch (error) {
        setIsError({ error: true, message: error.message });
        console.log(error);
      }
    };
    loadWeather();
  }, []);
  const handleClick = (cityCode) => {
    navigate(`/weather/${cityCode}`);
  };
  return (
    <div
      className="card card-weather"
      onClick={() => handleClick(cityWeather.id)}
    >
      <img className="close-img" src={images.close} alt="" />

      {!isLoading && !isError.error ? (
        <>
          <div className="header" style={{ background: color }}>
            <img className="clouds-background" src={images.cloud_bg} alt="" />
            <div className="location">
              <h2>{`${cityWeather.name}, ${cityWeather.sys.country}`}</h2>
              <p>
                {moment
                  .utc()
                  .add(cityWeather.timezone, "seconds")
                  .format("hh:mm a, MMM DD")}
              </p>
              <div className="weather-stat">
                <img
                  src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h4>{cityWeather.weather[0].description}</h4>
              </div>
            </div>
            <div className="temperature">
              <h1>{cityWeather.main.temp}°c</h1>
              <div className="temperature-minmax">
                <h5>Temp Min: {cityWeather.main.temp_min}°c</h5>
                <h5>Temp Max: {cityWeather.main.temp_max}°c</h5>
              </div>
            </div>
          </div>
          <CardFooter data={cityWeather} />
        </>
      ) : isError.error ? (
        <div className="header">
          <h2>{isError.message}</h2>
        </div>
      ) : (
        <div className="loading-container">
          <MoonLoader color={color} size={50} />
        </div>
      )}
    </div>
  );
};

export default CityCard;
