import React from 'react';
import WeatherTile from './WeatherTile';
import {shallow} from 'enzyme';

describe('WeatherTile Component', () => {
  it('should render properly', () => {
    const props = {
      dateTime: '2020-08-04 18:00:00',
      temp: 234.23,
      humidity: 84,
      weather: [{main: 'Rain', description: 'light rain'}],
    };
    const wrapper = shallow(<WeatherTile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('summary should be empty of weather object is passed as empty', () => {
    const props = {
      temp: 234.23,
      humidity: 84,
      weather: [],
    };
    const wrapper = shallow(<WeatherTile {...props} />);
    const summary = wrapper.find('[data-testid="summary"]');
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe('');
  });

  test('summary should show description passed from weather object', () => {
    const props = {
      temp: 234.23,
      humidity: 84,
      weather: [{main: 'Rain', description: 'light rain'}],
    };
    const wrapper = shallow(<WeatherTile {...props} />);
    const summary = wrapper.find('[data-testid="summary"]');
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe('light rain');
  });
});
