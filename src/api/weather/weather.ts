import axios from 'axios';
import { errors } from 'common';
import { ApiResponse } from './interfaces';
// import dotenv from 'dotenv';

// dotenv.config();

/**
 * API Key id read from the environment variable
 */
const APPID = process.env.WEATHER_APPID;

export const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}`;

export const API_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };

const fetchData = async (zipCode?: number, name?: string): Promise<ApiResponse> => {
  if (!zipCode && !name) {
    throw new errors.API('missing zipcode and name for fetching user input');
  }
  try {
    // Compose the Weather API request url
    let url = BASE_URL;
    if (name) {
      url = `${url}&q=${name}`;
    }
    if (zipCode) {
      url = `${url}&zip=${zipCode}`;
    }
    const { data } = await axios.get(encodeURI(url), {
      headers: API_HEADERS
    });

    return data;
  } catch (err) {
    let msg = '';
    if (err.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      msg = `${err.response.data.message}, statusCode = ${err.response.status}`;
    } else if (err.request) {
      // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      msg = err.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      msg = err.message;
    }
    return Promise.reject(
      `Could not fetch data from API server for "${name}" and "${zipCode}" ( Received message: ${msg} )`
    );
  }
};

export default fetchData;
