import React, {PropTypes} from 'react';
import {DayItem} from './DayItem';

export const Detail = (props) =>
  <div className="detail">
    <DayItem day={props.weather} />
    <p>{props.city}</p>
    <p>{props.weather.weather[0].description}</p>
    <p>min temp: {props.weather.temp.min}</p>
    <p>max temp: {props.weather.temp.max}</p>
    <p>humidity: {props.weather.humidity}</p>
  </div>;

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};
