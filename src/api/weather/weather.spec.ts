/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { mocks, errors } from 'common';
import getWeather from './weather';

jest.mock('axios');

describe('api/weather', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const name = 'sydney';
  const zipCode = 3000;

  it('missing name and zipCode input', async () => {
    return expect(getWeather()).rejects.toMatchObject(
      new errors.API('missing zipcode and name for fetching user input')
    );
  });

  it('call axios and return ApiResponse information from the API', async () => {
    const data = mocks.getWeatherInformation();
    (axios.get as any).mockResolvedValue({ data });

    const response = await getWeather(zipCode, name);
    expect(response).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('check for name entry', async () => {
    const data = mocks.getWeatherInformation();
    (axios.get as any).mockResolvedValue({ data });

    const response = await getWeather(undefined, name);
    expect(response).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('check for zipCode entry', async () => {
    const data = mocks.getWeatherInformation();
    (axios.get as any).mockResolvedValue({ data });

    const response = await getWeather(zipCode);
    expect(response).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('call axios and throw an exception', async () => {
    (axios.get as any).mockImplementationOnce(() =>
      Promise.reject(new Error('Unable to load data'))
    );
    return expect(getWeather(zipCode, name)).rejects.toMatchObject(
      new errors.API(
        `Could not fetch data from API server for "${name}" and "${zipCode}" ( Received message: Unable to load data )`
      )
    );
  });

  it('check for error response message', async () => {
    const err = {
      response: {
        data: {
          message: 'Unable to load data'
        },
        status: 500
      }
    };
    (axios.get as any).mockImplementationOnce(() => Promise.reject(err));
    await expect(getWeather(zipCode, name)).rejects.toMatchObject(
      new errors.API(
        `Could not fetch data from API server for "${name}" and "${zipCode}" ( Received message: Unable to load data, statusCode = 500 )`
      )
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('check for error request data field', async () => {
    const err = {
      request: 'Unable to retireve data from request'
    };
    (axios.get as any).mockImplementationOnce(() => Promise.reject(err));
    await expect(getWeather(zipCode, name)).rejects.toMatchObject(
      new errors.API(
        `Could not fetch data from API server for "${name}" and "${zipCode}" ( Received message: Unable to retireve data from request )`
      )
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
