import fs from 'fs';
import util from 'util';
import { errors } from 'common';
import { input as inputService, loadData } from 'services';

export default async function run(filename: string) {
  try {
    const readFile = util.promisify(fs.readFile);
    const data = await readFile(filename, 'utf8');

    console.log('Running app');
    console.log('-----------');
    console.log(`input = ${data}`);

    const list = inputService.parseStringInput(data, ',');
    for (const location of list) {
      const weather = await loadData.getWeather(location);
      const { coord } = weather;
      location.weather = weather;
      location.time = await loadData.getTime(coord.lat, coord.lon);
    }
    const output = list.map(record => record.toString());
    console.log('Output');
    console.log('------');

    console.log(output);
  } catch (e) {
    throw new errors.App('Unable to read given file');
  }
}
