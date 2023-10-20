import { getCachedData, cacheData } from "../utils/cachingService";
import { API_KEY } from "./config/openWeatherConfig";

export const getWeather = async (citycode) => {
  try {
    const cachedData = getCachedData(citycode);
    if (cachedData) {
      return cachedData;
    }
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${citycode}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    cacheData(citycode, data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
