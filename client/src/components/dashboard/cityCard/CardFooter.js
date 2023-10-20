import React from "react";
import { images } from "../../../utils/images";
import moment from "moment";

const CardFooter = ({ data }) => {
  return (
    <div className="footer">
      <div className="pressure">
        <p>
          <b>Pressure:</b> <br className="show-sm" /> {data.main.pressure} hPa
        </p>
        <p>
          <b>Humidity:</b><br className="show-sm" /> {data.main.humidity}%
        </p>
        <p>
          <b>Visibility:</b><br className="show-sm" /> {data.visibility / 1000} km
        </p>
      </div>
      <hr className="divider" />
      <div className="wind">
        <div className="wind-img">
          <img src={images.wind} alt="" />
        </div>
        <p>
          <b>{`${data.wind.speed}m/s 120 Degree`}</b>
        </p>
      </div>
      <hr className="divider" />
      <div className="sunrise">
        <p>
          <b>Sunrise: </b><br className="show-sm" />
          {moment
            .utc(data.sys.sunrise, "X")
            .add(data.timezone, "seconds")
            .format("h:mm a")}
        </p>
        <p>
          <b>Sunset: </b><br className="show-sm" />
          {moment
            .utc(data.sys.sunset, "X")
            .add(data.timezone, "seconds")
            .format("h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default CardFooter;
