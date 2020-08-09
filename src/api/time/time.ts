import axios from 'axios';
import { ApiResponse } from './interfaces';
import { constants, errors } from 'common';

const fetchData = async (lat: number, lng: number): Promise<ApiResponse> => {
  try {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${constants.TIME_APPID}&format=json&by=position&lat=${lat}&lng=${lng}`;;
    const { data } = await axios.get(encodeURI(url), {
      headers: constants.API_HEADERS
    });
    return data;
  } catch (err) {
    let msg = '';
    if (err.response) {
      msg = `${err.response.data.message}, statusCode = ${err.response.status}`;
    } else if (err.request) {
      msg = err.request;
    } else {
      msg = err.message;
    }
    throw new errors.API(`Could not fetch data from API server for "${lat}" and "${lng}" ( Received message: ${msg} )`);
  }
};

export default fetchData;
