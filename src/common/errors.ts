export class Location extends Error {
  constructor(message = 'Location.Error') {
    super(message);
    this.name = 'LocationError';
  }
}

export class Input extends Error {
  constructor(message = 'Input.Error') {
    super(message);
    this.name = 'InputError';
  }
}

export class API extends Error {
  constructor(message = 'API.Error') {
    super(message);
    this.name = 'API';
  }
}

export class App extends Error {
  constructor(message = 'App.Error') {
    super(message);
    this.name = 'Main';
  }
}
