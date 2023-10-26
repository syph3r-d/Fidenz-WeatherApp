import React, { useEffect, useState } from "react";
import CardFooter from "../dashboard/cityCard/CardFooter";
import { images } from "../../utils/images";
import { useParams } from "react-router";
import { getWeather } from "../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import { OPEN_WEATHER_ICONS } from "../../APIs/config/urls";
import { useQuery } from "react-query";

const WeatherViewCard = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  // const [data, setdata] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState({ error: false, message: "" });
  const {data,isLoading,isError,error} = useQuery(city,()=>getWeather(city));

  useEffect(() => {
    // const loadWeather = async () => {
    //   try {
    //     setIsLoading(true);
    //     const res = await getWeather(city);
    //     setdata(res);
    //     setIsLoading(false);
    //   } catch (error) {
    //     setIsError({ error: true, message: error.message });
    //     console.log(error);
    //   }
    // };
    // loadWeather();
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
      {!isLoading && !isError ? (
        <>
          <div
            className="header"
            style={{
              background: "rgb(56, 142, 231)",
            }}
          >
            <div className="location">
              <h2>{`${data.name}, ${data.sys.country}`}</h2>
              <p>9.19am, Feb 8</p>
            </div>
            <div className="weather-details">
              <div className="weather-stat">
                <img
                  src={`${OPEN_WEATHER_ICONS}${data.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h4>{data.weather[0].description}</h4>
              </div>
              <hr className="divider" />
              <div className="temperature">
                <h1>{data.main.temp}°c</h1>
                <div className="temperature-minmax">
                  <h5>Temp Min: {data.main.temp_min}°c</h5>
                  <h5>Temp Max: {data.main.temp_max}°c</h5>
                </div>
              </div>
            </div>
          </div>
          <CardFooter data={data} />
        </>
      ) : isError ? (
        <div className="header" style={{textAlign:"center"}}>
          <h1>{error.message}</h1>
        </div>
      ) : (
        <div className="loading-container">
          <MoonLoader color={"#388ee7"} size={50} />
        </div>
      )}
    </div>
  );
};

export default WeatherViewCard;
