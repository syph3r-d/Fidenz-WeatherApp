import React from "react";
import { images } from "../../utils/images";
import moment from "moment";

const CardFooter = ({ data }) => {
    const timezone=new Date().getTimezoneOffset()
    console.log(timezone);
  return (
    <div className="footer">
      <div className="pressure">
        <p>
          <b>Pressure:</b> {data.main.pressure} hPa
        </p>
        <p>
          <b>Humidity:</b> {data.main.humidity}%
        </p>
        <p>
          <b>Visibility:</b> {data.visibility / 1000} km
        </p>
      </div>
      <hr className="divider" />
      <div className="wind">
        <div className="wind-img">
          <img src={images.wind} alt="" />
        </div>
        <p>
          <b>{`${data.wind.speed}/s 120 Degree`}</b>
        </p>
      </div>
      <hr className="divider" />
      <div className="sunrise">
        <p>
          <b>Sunrise: </b>{moment.utc(data.sys.sunrise,'X').add(timezone,'seconds').format('h:mm a')}
        </p>
        <p>
          <b>Sunset: </b>{moment.utc(data.sys.sunset,'X').format('h:mm a')}
        </p>
      </div>
    </div>
  );
};

export default CardFooter;
