import React from 'react';
import WeatherTile from './WeatherTile';

export default {
  title: 'WeatherTile',
  component: WeatherTile,
};

const Tpl = (args) => <WeatherTile {...args} />;

export const WeatherTileDefault = Tpl.bind({});
WeatherTileDefault.args = {
  dateTime: '2020-08-04 18:00:00',
  temp: 234.23,
  humidity: 84,
  weather: [{main: 'Rain', description: 'light rain'}],
};

WeatherTileDefault.storyName = 'Default Tile';
