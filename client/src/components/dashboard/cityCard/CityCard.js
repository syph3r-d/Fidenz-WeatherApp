import React, { useEffect, useState } from "react";
import { images } from "../../../utils/images";
import CardFooter from "./CardFooter";
import { getWeather } from "../../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import moment from "moment";
import { useQuery } from "react-query";

const CityCard = ({ color, city }) => {
  const navigate = useNavigate();
  // const [data, setdata] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState({ error: false, message: "" });
  const {data,isLoading,isError,error} = useQuery(city.CityCode,()=>getWeather(city.CityCode));

  useEffect(() => {
    // const loadWeather = async () => {
    //   try {
    //     setIsLoading(true);
    //     const res = await getWeather(city.CityCode);
    //     setdata(res);
    //     setIsLoading(false);
    //   } catch (error) {
    //     setIsError({ error: true, message: error.message });
    //     console.log(error);
    //   }
    // };
    // loadWeather();
  }, []);

  const handleClick = (cityCode) => {
    navigate(`/weather/${cityCode}`);
  };
  console.log(data,isLoading,error);
  return (
    <div
      className="card card-weather"
      onClick={() => handleClick(data.id)}
    >
      <img className="close-img" src={images.close} alt="" />

      {!isLoading && !isError.error ? (
        <>
          <div className="header" style={{ background: color }}>
            <img className="clouds-background" src={images.cloud_bg} alt="" />
            <div className="location">
              <h2>{`${data.name}, ${data.sys.country}`}</h2>
              <p>
                {moment
                  .utc()
                  .add(data.timezone, "seconds")
                  .format("hh:mm a, MMM DD")}
              </p>
              <div className="weather-stat">
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h4>{data.weather[0].description}</h4>
              </div>
            </div>
            <div className="temperature">
              <h1>{data.main.temp}°c</h1>
              <div className="temperature-minmax">
                <h5>Temp Min: {data.main.temp_min}°c</h5>
                <h5>Temp Max: {data.main.temp_max}°c</h5>
              </div>
            </div>
          </div>
          <CardFooter data={data} />
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
