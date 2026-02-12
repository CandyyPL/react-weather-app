import { WeatherDataSchema, type WeatherData } from '@/schemas/weatherSchema';

type GetWeatherAtProps = {
  lat: number;
  lon: number;
};

const API_KEY = import.meta.env.VITE_OW_API_KEY;

export const getWeatherAt = async ({
  lat,
  lon,
}: GetWeatherAtProps): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const data = await res.json();

  return WeatherDataSchema.parse(data);
};
