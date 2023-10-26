import { OPEN_WEATHER } from "./config/urls";

export const getWeather = async (citycode) => {
  try {
    const res = await fetch(
      `${OPEN_WEATHER}?id=${citycode}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
