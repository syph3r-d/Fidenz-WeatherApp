import { OPEN_WEATHER } from "./config/urls";
import { UNITS, CACHE_TIME, COLORS } from "./config/constants";
import moment from "moment";

export const getWeather = async (citycode, cached) => {
  try {
    const key = "weatherData_" + citycode;
    const cachedData = JSON.parse(localStorage.getItem(key));
    if (
      cachedData &&
      cached &&
      moment.utc(cachedData?.cachedTime).add(CACHE_TIME, "seconds").valueOf() >
        Date.now().valueOf()
    ) {
      return cachedData;
    }
    const res = await fetch(
      `${OPEN_WEATHER}?id=${citycode}&appid=${process.env.REACT_APP_API_KEY}&units=${UNITS}`
    );
    const data = await res.json();
    const cacheData = {
      ...data,
      cachedTime: Date.now().valueOf(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    localStorage.setItem(key, JSON.stringify(cacheData));
    return cacheData;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
