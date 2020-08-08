// https://javascript.info/custom-errors
/**
 * Generic Error object been thrown inside any of the code inputs
 */
export class Location extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'LocationError';
  }
}

export class Input extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InputError';
  }
}

export class API extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'API';
  }
}

export class Main extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'Main';
  }
}
