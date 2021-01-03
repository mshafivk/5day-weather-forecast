# Weather-Forecast

Simple React Application to display5 Day 3hrs Weather forecast of a city of users choice.

> This application is hosted with surge.sh. [Visit elfin-map.surge.sh](http://elfin-map.surge.sh/)

- User can search a city and find weather report
- Default city is set as Bangalore

## Setup

- Clone repositry and navigate to root directory of project
- Run npm install (Assume Latest version of NodeJs installed)
- Run project using npm start (app will run in http://localhost:3001 )

## Build

Following command will create build in **dist** folder

> npm run build

## Test

To run tests:

> npm run test

To check code coverage:

> npm run test -- --coverage

html report will be generated in coverage folder

## Storybook

Use storybook to verify components independently.

> Run storybook using _npm run storybook_
> Storybook runs in localhost port 6006

## TODO

- [ ] Feature - Toggle between temperature scales - Celcisus and farenheit
- [ ] Provide weather related icons ( Sunny, rainy, windy etc)
- [ ] Rich user interface to highlight today's weather from other dates
- [ ] Weather Tiles and WeatherWidget to be moved to a re-usabele component library
