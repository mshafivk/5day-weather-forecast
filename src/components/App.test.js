import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App Component', () => {
  it('should render properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
