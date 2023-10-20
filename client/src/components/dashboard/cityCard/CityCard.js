import React, { useEffect, useState } from "react";
import { images } from "../../utils/images";
import CardFooter from "./CardFooter";
import { getWeather } from "../../../APIs/weatherAPI";
import { useNavigate } from "react-router";

const CityCard = ({ color, city }) => {
  const navigate = useNavigate();
  const [cityWeather, setCityWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadWeather = async () => {
      setIsLoading(true);
      const res = await getWeather(city.CityCode);
      setCityWeather(res);
      setIsLoading(false);
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
      {!isLoading && (
        <>
          <div className="header" style={{ background: color }}>
            <img className="clouds-background" src={images.cloud_bg} alt="" />
            <div className="location">
              <h2>{`${cityWeather.name}, ${cityWeather.sys.country}`}</h2>
              <p>9.19am, Feb 8</p>
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
      )}
    </div>
  );
};

export default CityCard;
