import React from 'react';
import GetWeather from '../components/GetWeather';

let ForecastContainer = () => {
  return (
    <div className="enter-city">
      <h1 className="enter-city__title">Enter a City and State</h1>
      <div className="enter-city__get-weather">
          <GetWeather location="vertical" />
      </div>
    </div>
  );
};

export default ForecastContainer;
