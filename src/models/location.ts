import { errors } from 'common';
import { weather } from 'api';

export const KelvinToCelcius = (kelvin: number) => kelvin - 273.15;

export class Location {
  name?: string;

  postalCode?: number;

  weather?: weather.Interfaces.ApiResponse;

  time?: string;

  constructor(str: string) {
    if (!str || !str.trim()) {
      throw new errors.Location('Invalid location input');
    }
    const regexAlphabet = new RegExp('[a-zA-Z]');
    if (regexAlphabet.test(str)) {
      this.name = str.trim();
    } else {
      this.postalCode = parseInt(str.trim(), 10);
    }
  }

  toString = () => {
    const result = `location name = ${this.name ?? 'EMPTY'}, postalCode = ${
      this.postalCode ?? 'EMPTY'
    }, weather = ${
      this.weather
        ? parseFloat(KelvinToCelcius(this.weather.main.temp).toString()).toFixed(2) + 'Celsius'
        : 'EMPTY'
    }, time = ${this.time ?? 'EMPTY'}`;
    return result;
  };
}

export default Location;
