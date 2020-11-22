import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ list: [] }),
    }),
  );

  beforeEach(() => {
    fetch.mockClear();
  });
  it('should render properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show loading message and invoke fetch on button click', () => {
    const wrapper = shallow(<App />);
    wrapper.find('button').simulate('click');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(wrapper.find('[data-testid="loading-indicator"]')).toHaveLength(1);
  });
  test('if city can be updated', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input').simulate('change', { target: { value: 'dummy' } });
    expect(wrapper.find('input').props().value).toEqual('dummy');
  });
});
