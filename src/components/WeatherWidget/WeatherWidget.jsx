import React from 'react';
import {WeatherTile} from '../WeatherTile/WeatherTile';
import PropTypes from 'prop-types';

export const WeatherWidget = ({forecasts}) =>
  forecasts.length === 0 ? (
    <div data-testid="empty-text">Nothing to display</div>
  ) : (
    forecasts.map(({main, weather, dt_txt}) => (
      <WeatherTile {...main} weather={weather} key={dt_txt} dateTime={dt_txt} />
    ))
  );

WeatherWidget.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number,
        humidity: PropTypes.number,
      }).isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          main: PropTypes.string,
          description: PropTypes.string,
        }),
      ).isRequired,
      dt_txt: PropTypes.string.isRequired,
    }),
  ),
};
