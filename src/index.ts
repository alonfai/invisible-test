require('module-alias/register');

import dotenv from 'dotenv';
dotenv.config();

if (process.argv.length < 3) {
  console.error(
    'Missing npm script name to execute and/or the file name as source ( ex: yarn start input.txt )'
  );
  process.exit(1);
}

import app from './app';
app(process.argv[2]);
