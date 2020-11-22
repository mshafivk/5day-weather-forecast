import React from 'react';
import {WeatherWidget} from './WeatherWidget';

export default {
  title: 'Weather Widget',
  component: WeatherWidget,
};

const Tpl = (args) => <WeatherWidget {...args} />;

export const WeatherWidgetDefault = Tpl.bind({});
WeatherWidgetDefault.args = {
  forecasts: [
    {
      dt_txt: '2020-08-04 18:00:00',
      main: {temp: 234.23, humidity: 84},
      weather: [{main: 'Rain', description: 'light rain'}],
    },
    {
      dt_txt: '2020-08-03 19:00:00',
      main: {temp: 234.23, humidity: 84},
      weather: [{main: 'Rain', description: 'light rain'}],
    },
    {
      dt_txt: '2020-08-02 19:00:00',
      main: {temp: 234.23, humidity: 84},
      weather: [{main: 'Rain', description: 'light rain'}],
    },
  ],
};
WeatherWidgetDefault.storyName = 'Default';

export const EmptyWidget = Tpl.bind({});
EmptyWidget.args = {forecasts: []};
EmptyWidget.storyName = 'When Empty';
