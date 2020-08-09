import axios from 'axios';
import { errors, constants } from 'common';
import { ApiResponse } from './interfaces';

const fetchData = async (zipCode?: number, name?: string): Promise<ApiResponse> => {
  if (!zipCode && !name) {
    throw new errors.API('missing zipcode and name for fetching user input');
  }
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?APPID=${constants.WEATHER_APPID}`;
    if (name) {
      url = `${url}&q=${name}`;
    }
    if (zipCode) {
      url = `${url}&zip=${zipCode}`;
    }

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
    throw new errors.API(
      `Could not fetch data from API server for "${name}" and "${zipCode}" ( Received message: ${msg} )`
    );
  }
};

export default fetchData;
