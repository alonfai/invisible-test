/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getTime, getWeather } from './loadData';
import { Location } from 'models';
import { mocks } from 'common';

jest.mock('axios');

describe('services.loadData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('getTime', () => {
    const lat = 40.689247;
    const lng = -74.044502;

    it('standard input with several locations', async () => {
      const data = mocks.getTimeInformation();
      (axios.get as any).mockResolvedValue({ data });

      const response = await getTime(lat, lng);
      expect(response).toEqual(mocks.responseTime);
    });
  });
  describe('getWeather', () => {
    const location = new Location('new york');

    it('get weather outcome', async () => {
      const data = mocks.getWeatherInformation();
      (axios.get as any).mockResolvedValue({ data });

      const response = await getWeather(location);
      expect(response).toEqual(data);
    });
  });
});
