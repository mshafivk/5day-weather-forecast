import React, { useEffect, useReducer } from 'react';
import {
  SET_CITY,
  SET_LOADING_STATE,
  SET_FORECAST,
} from '../../reducers/actions';
import { WeatherWidget } from '../WeatherWidget/WeatherWidget';
import { weatherReducer, initialState } from '../../reducers/weatherReducer';
import { fetchWeatherInfo } from '../../common/services';
import classes from './App.less';

const App = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const handleCityChange = (evt) =>
    dispatch({ type: SET_CITY, payload: { city: evt.target.value } });

  const loadInformation = () => {
    const fetchData = async () => {
      dispatch({ type: SET_LOADING_STATE, payload: { loading: true } });
      const response = await fetchWeatherInfo(state.city);
      dispatch({
        type: SET_FORECAST,
        payload: { forecasts: response.list || [] },
      });
      dispatch({ type: SET_LOADING_STATE, payload: { loading: false } });
    };
    fetchData();
  };

  useEffect(loadInformation, []);

  return (
    <div className={classes.container}>
      <h2>5 Day Weather Forcast</h2>
      <div>
        City :{' '}
        <input type="text" value={state.city} onChange={handleCityChange} />
        <button onClick={loadInformation}>UPDATE WEATHER</button>
      </div>
      <div className={classes.main}>
        {state.loading ? (
          <div data-testid="loading-indicator">Loading, Please wait...</div>
        ) : (
          <WeatherWidget forecasts={state.forecasts} />
        )}
      </div>
    </div>
  );
};
export default App;
