import React from 'react';
import {WeatherWidget} from './WeatherWidget';
import {shallow} from 'enzyme';

describe('Weather Widget Component', () => {
  it('Should render properly', () => {
    const props = {
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
    const wrapper = shallow(<WeatherWidget {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a message if no forecasts items are empty ', () => {
    const props = {
      forecasts: [],
    };
    const wrapper = shallow(<WeatherWidget {...props} />);
    expect(wrapper.find('[data-testid="empty-text"]').text()).toEqual(
      'Nothing to display',
    );
  });
});
