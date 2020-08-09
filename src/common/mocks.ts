import { weather, time } from 'api';

export function getCoordsData(): weather.Interfaces.GeoLocation {
  return {
    lat: 37.39,
    lon: -122.08
  };
}

export function getConditions(): weather.Interfaces.Weather[] {
  return [
    {
      id: 701,
      main: 'Mist',
      description: 'mist',
      icon: '50d'
    },
    {
      id: 300,
      main: 'Drizzle',
      description: 'light intensity drizzle',
      icon: '09d'
    }
  ];
}

export function getMainData(): weather.Interfaces.Main {
  return {
    temp: 296.71,
    pressure: 1013,
    humidity: 53,
    temp_min: 294.82,
    temp_max: 298.71
  };
}

export function getWindData(): weather.Interfaces.Wind {
  return {
    speed: 1.5,
    deg: 350
  };
}

export function getCloudData(): weather.Interfaces.Cloud {
  return {
    all: 1
  };
}

export function getRainData(): weather.Interfaces.Rain {
  return {
    '1h': 10,
    '3h': 5
  };
}

export function getSnowData(): weather.Interfaces.Snow {
  return {
    '1h': 10,
    '3h': 25
  };
}

export function getSysData(): weather.Interfaces.System {
  return {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: 'US',
    sunrise: 1560343627,
    sunset: 1560396563
  };
}

/**
 * Get a mock version of the store with list of customers
 */
export function getWeatherInformation(): weather.Interfaces.ApiResponse {
  return {
    base: 'stations',
    clouds: getCloudData(),
    coord: getCoordsData(),
    timezone: -25200,
    id: 420006353,
    name: 'Mountain View',
    cod: 200,
    dt: 1560350645,
    main: getMainData(),
    rain: getRainData(),
    snow: getSnowData(),
    sys: getSysData(),
    weather: getConditions(),
    wind: getWindData()
  };
}

export const responseTime = '23:34:42';

export function getTimeInformation(): time.Interfaces.ApiResponse {
  return {
    status: 'OK',
    message: '',
    countryCode: 'US',
    countryName: 'United States',
    zoneName: 'America/New_York',
    abbreviation: 'EDT',
    gmtOffset: -14400,
    dst: 1,
    zoneStart: 1583650800,
    zoneEnd: 1604210400,
    timestamp: 1596929682,
    formatted: '2020-08-08 23:34:42'
  };
}
