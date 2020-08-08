import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import { errors } from 'common';
import { input as inputService, loadData } from 'services';

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

// Read the file and print its contents.
const filename = process.argv[2];
fs.readFile(filename, 'utf8', async (err, data) => {
  if (err) {
    throw new errors.Main('Unable to read given file');
  }
  const list = inputService.parseStringInput(data, ',');

  for (const location of list) {
    const weather = await loadData.getWeather(location);
    location.weather = weather;
  }

  console.log(list[0])
});
