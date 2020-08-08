import { Location } from 'models';
import { errors } from 'common';

export function parseStringInput(str: string, delimeter = ','): Location[] {
  if (!str) {
    throw new errors.Input('parsing user input failed due to missing input');
  }
  const locationsArray = str.split(delimeter);
  return parseArrayInput(locationsArray);
}

export function parseArrayInput(locations: string[]): Location[] {
  return locations.map(str => new Location(str));
}
