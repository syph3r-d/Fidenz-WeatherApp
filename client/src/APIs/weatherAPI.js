import { OPEN_WEATHER } from "./config/urls";

export const getWeather = async (citycode) => {
  try {
    const key = "weatherData_" + citycode;
    const cachedData = sessionStorage.getItem(key);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const res = await fetch(
      `${OPEN_WEATHER}?id=${citycode}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    sessionStorage.setItem(key, JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
