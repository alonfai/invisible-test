/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import path from 'path';
import { errors } from 'common';
import run from './app';

jest.mock('axios');

describe('app.run', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('unable to read the file', async () => {
    return expect(run('null')).rejects.toMatchObject(new errors.App('Unable to read given file'));
  });

  it('parsing the file data and printing the records properly', async () => {
    (axios.get as any).mockResolvedValue({
      data: {
        main: {
          temp: 300
        },
        coord: {
          lat: 50,
          lon: 50
        },
        formatted: '2020-08-08 08:20:31'
      }
    });
    expect(await run(path.resolve(__dirname, '../input.txt'))).toEqual(undefined);
  });
});
