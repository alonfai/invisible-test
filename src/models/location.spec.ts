import Location, { KelvinToCelcius } from './location';
import { errors, mocks } from 'common';

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

  describe('check toString parsing', () => {
    it('only name', () => {
      const location = new Location('Boston');
      expect(location.toString()).toEqual(
        'location name = Boston, postalCode = EMPTY, weather = EMPTY, time = EMPTY'
      );
    });

    it('only postCode', () => {
      const location = new Location('3000');
      expect(location.toString()).toEqual(
        'location name = EMPTY, postalCode = 3000, weather = EMPTY, time = EMPTY'
      );
    });

    it('only weather info', () => {
      const location = new Location('3000');
      location.weather = mocks.getWeatherInformation()
      expect(location.toString()).toEqual(
        'location name = EMPTY, postalCode = 3000, weather = ' + parseFloat(KelvinToCelcius(location.weather.main.temp).toString()).toFixed(2) + 'Celsius' + ', time = EMPTY'
      );
    });

    it('only time', () => {
      const location = new Location('3000');
      location.time = '09:30:00'
      expect(location.toString()).toEqual(
        'location name = EMPTY, postalCode = 3000, weather = EMPTY, time = 09:30:00'
      );
    });
  });
});
