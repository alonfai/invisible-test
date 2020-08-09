/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { mocks, errors } from 'common';
import getTime from './time';

jest.mock('axios');

describe('api/time', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const lat = 40.689247;
  const lng = -74.044502;

  it('call axios and return ApiResponse information from the API', async () => {
    const data = mocks.getWeatherInformation();
    (axios as any).get.mockResolvedValue({ data });

    const response = await getTime(lat, lng);
    expect(response).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('call axios and throw an exception', async () => {
    (axios.get as any).mockImplementationOnce(() =>
      Promise.reject(new Error('Unable to load data'))
    );
    return expect(getTime(lat, lng)).rejects.toMatchObject(
      new errors.API(`Could not fetch data from API server for "${lat}" and "${lng}" ( Received message: Unable to load data )`)
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
    await expect(getTime(lat, lng)).rejects.toMatchObject(
      new errors.API(`Could not fetch data from API server for "${lat}" and "${lng}" ( Received message: Unable to load data, statusCode = 500 )`)
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('check for error request data field', async () => {
    const err = {
      request: 'Unable to retireve data from request'
    };
    (axios.get as any).mockImplementationOnce(() => Promise.reject(err));
    await expect(getTime(lat, lng)).rejects.toMatchObject(
      new errors.API(`Could not fetch data from API server for "${lat}" and "${lng}" ( Received message: Unable to retireve data from request )`)
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
