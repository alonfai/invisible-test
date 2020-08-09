import { Location } from 'models';
import { weather as WeatherAPI, time as TimeAPI } from 'api';

export function getWeather(location: Location): Promise<WeatherAPI.Interfaces.ApiResponse> {
  return WeatherAPI.fetchData(location.postalCode, location.name);
}

export async function getTime(lat: number, lng: number): Promise<string> {
  const response = await TimeAPI.fetchData(lat, lng);

  const time = response.formatted.split(' ')[1].split(':');

  const hours = time[0];
  const minutes = time[1];
  const seconds = time[2];

  return `${hours}:${minutes}:${seconds}`;
}
