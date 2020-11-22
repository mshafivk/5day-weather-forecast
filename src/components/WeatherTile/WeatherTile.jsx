import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherTile.less';

const WeatherTile = ({dateTime, temp, humidity, weather}) => (
  <div className={classes.container}>
    <div className={classes.row}>
      <div data-testid="date" className={classes.summary}>
        {dateTime}
      </div>
    </div>
    <div className={classes.row}>
      <div>
        <span>Temperature : </span>
        <span>{temp}</span>
      </div>
      <div>
        <span>Humidity : </span>
        <span>{humidity}</span>
      </div>
    </div>
    <div className={classes.row}>
      <div data-testid="summary" className={classes.summary}>
        {weather.length === 1 && weather[0].description}
      </div>
    </div>
  </div>
);

WeatherTile.propTypes = {
  dateTime: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  weather: PropTypes.arrayOf(
    PropTypes.shape({main: PropTypes.string, description: PropTypes.string}),
  ),
};
export default WeatherTile;
