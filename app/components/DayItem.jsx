import React, {PropTypes} from 'react';
import moment from 'moment';

export const DayItem = (props) =>
  <div className={`forecast-day ${(!props.handleClick) ? `forecast-day_simple` : ``}`} onClick={props.handleClick}>
    <img src={require('../images/weather-icons/' + props.day.weather[0].icon + '.svg')}
    alt={props.day.weather[0].description}/>
    <h2>{moment(+(props.day.dt + '000')).format('dddd, MMMM Do')}</h2>
  </div>;

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
  handleClick: PropTypes.func
};
