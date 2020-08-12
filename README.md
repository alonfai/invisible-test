# Node.js + TypeScript demo

This project takes a given array of inputs in a .txt file (location name, postal code), and does a `console.log` the current time and weather for those locations.

Example: Under main root directory add a file input.txt with the following "New York, 10005, Tokyo, São Paulo, Tel Aviv, Melbourne"

## NPM modules used

In this project, the main npm modules used are

* Node 10.x
* Typescript
* Jest
* axios
* ESLint + Prettier
* husky + lint-staged (for commiting)

## Pre-Requirements

It fetching data from 2 3rd party API services for both weather (`https://openweathermap.org/`) and timestamp (`http://api.timezonedb.com`). 

It needs an API key for each service to be appended to each HTTP request. You can embed this key as a custom environment variable inside the following files:

* .env - add your API keys for each service inside this file or as part of your CI/CD build pipeline

> `WEATHER_APPID`  - Weather service <https://openweathermap.org/>

> `TIME_APPID` - Time service <http://api.timezonedb.com>

***

## Install

Close the project using the following command and use either `yarn`/`npm` package managers:

``` node
git clone https://github.com/alonfai/invisible-test

npm install

// or using yarn

yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. The app will reload if you make edits.

### `yarn test`

Launches the test runner with code coverage output under `coverage` folder. It takes all files with `.spec.*` or  `.test.*` extensions and executes all coding assertions. Furthermore, it will also produce jest built in coverage reporter under `coverage` folder that works well with ES6.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.

### `yarn clean`

clears the output and coverage folders

### `yarn lint`

execute ESLint and Prettier tooling on the codebase

### `yarn build`

Builds the app for production to the `build` folder.

You can then deploy the app to your production environment and/or add this as part of your CI/CD pipeline
