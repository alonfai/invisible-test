import Location from './location';
import { errors } from 'common';

describe('models.location', () => {
  it('check for an empty input', () => {
    expect(() => {
      new Location('');
    }).toThrow(new errors.Location('Invalid location input'));
  });

  it('check for empty spaces', () => {
    expect(() => {
      new Location('  ');
    }).toThrow(new errors.Location('Invalid location input'));
  });

  it('check for string name', () => {
    const location = new Location('new york');
    expect(location.name).toEqual('new york');
    expect(location.postalCode).toBeUndefined();
  });

  it('check for number input', () => {
    const location = new Location('3000');
    expect(location.postalCode).toEqual(3000);
    expect(location.name).toBeUndefined();
  });
});
