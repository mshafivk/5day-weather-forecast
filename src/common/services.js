import { API_KEY } from './constants';

export const fetchWeatherInfo = async (city) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
  );
  const result = await resp.json();
  return result;
};
