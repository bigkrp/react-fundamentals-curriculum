import React, {PropTypes} from 'react';
import {DayItem} from './DayItem';

const ForecastUi = (props)=>
  <div className="forecast-container">
    <h1>{props.city}</h1>
    <div className="forecast-day__container">
      {props.daysData.map((item)=>
        <DayItem key={item.dt} day={item} handleClick={props.handleClick.bind(null, item)} />
      )}
    </div>
  </div>;

ForecastUi.propTypes = {
  city: PropTypes.string.isRequired,
  daysData: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export const Forecast = (props) => {
  // console.log(props.daysData);
  return props.isLoading
    ? <h1>Loading</h1>
    : <ForecastUi
        city={props.city}
        daysData={props.daysData}
        handleClick={props.handleClick}/>;
};

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  daysData: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
