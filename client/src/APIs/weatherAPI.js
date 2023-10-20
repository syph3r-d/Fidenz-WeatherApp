import { API_KEY } from "./config/openWeatherConfig";
import { getCachedData,cacheData } from "../utils/cachingService";

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
    cacheData(citycode,data);
    return data;
  } catch (error) {
    throw error;
  }
};
