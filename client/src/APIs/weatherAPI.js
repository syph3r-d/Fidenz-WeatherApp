import { API_KEY } from "./config/openWeatherConfig";

export const getWeather = async (citycode) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${citycode}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
