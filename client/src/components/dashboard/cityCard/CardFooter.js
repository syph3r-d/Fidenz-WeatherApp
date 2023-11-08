import React from "react";
import { images } from "../../../utils/images";
import moment from "moment";
import { TIME_FORMAT,WIND_SPEED_UNIT } from "../../../config/constants";

const CardFooter = ({ data }) => {
  return (
    <div className="footer">
      <div className="pressure">
        <p>
          <b>Pressure:</b> <br className="show-sm" /> {data.main.pressure} hPa
        </p>
        <p>
          <b>Humidity:</b>
          <br className="show-sm" /> {data.main.humidity}%
        </p>
        <p>
          <b>Visibility:</b>
          <br className="show-sm" /> {data.visibility / 1000} km
        </p>
      </div>
      <hr className="divider" />
      <div className="wind">
        <div className="wind-img">
          <img src={images.wind} alt="" />
        </div>
        <p>
          <b>{`${data.wind.speed}m/s ${data.wind.deg} Degree`}</b>
        </p>
      </div>
      <hr className="divider" />
      <div className="sunrise">
        <p>
          <b>Sunrise: </b>
          <br className="show-sm" />
          {moment
            .utc(data.sys.sunrise, "X")
            .add(data.timezone, "seconds")
            .format(TIME_FORMAT)}
        </p>
        <p>
          <b>Sunset: </b>
          <br className="show-sm" />
          {moment
            .utc(data.sys.sunset, "X")
            .add(data.timezone, "seconds")
            .format(TIME_FORMAT)}
        </p>
      </div>
    </div>
  );
};

export default CardFooter;
