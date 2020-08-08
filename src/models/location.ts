import { errors } from 'common';
import { weather } from 'api';

export class Location {
  name: string | undefined;

  postalCode: number | undefined;

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
}

export default Location;
