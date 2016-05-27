import React, {PropTypes} from 'react';

const DayItem = (props) =>
  <div className='forecast-day'>
    <img src={'./images/weather-icons/' + props.day.weather[0].icon + '.svg'}
    alt={props.day.weather[0].description}/>
    <h2>{props.day.key}</h2>
  </div>;

DayItem.propTypes = {
  day: PropTypes.object.isRequired
};

const ForecastUi = (props)=>
  <div className="forecast-container">
    <h1>{props.city}</h1>
    <div className="forecast-day__container">
      {props.daysData.map((item)=>
        <DayItem key={item.dt} day={item} />
      )}
    </div>
  </div>;

ForecastUi.propTypes = {
  city: PropTypes.string,
  daysData: PropTypes.array
};

export const Forecast = (props) => {
  return props.isLoading
    ? <h1>Loading</h1>
    : <ForecastUi
        city={props.city}
        daysData={props.daysData}/>;
};

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string,
  daysData: PropTypes.array
};
