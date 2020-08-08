import { Location } from 'models';
import { weather as API } from 'api';

export function getWeather(location: Location): Promise<API.Interfaces.ApiResponse> {
  return API.fetchData(location.postalCode, location.name);
}

export function getTime(location: Location): unknown {
  return null;
}
