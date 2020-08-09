
export const API_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };

/**
 * API Key id read from the environment variable against https://timezonedb.com/references/get-time-zone
 */
export const TIME_APPID = process.env.TIME_APPID;


/**
 * API Key id read from the environment variable (https://openweathermap.org/current#name)
 */
export const WEATHER_APPID = process.env.WEATHER_APPID;
