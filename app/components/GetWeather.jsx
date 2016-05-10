import React from 'react';

const GetWeather = (props) => {
  let placeholder = props.placeholder || 'St. Georgia, Utah';

  return (
    <div className={'getweather__holder_'+props.location}>
      <input className="form-control" placeholder={placeholder} value="" type="text" />
      <button className="btn btn-success" onClick={props.getWeather}>Get weather</button>
    </div>
  );
};

GetWeather.propTypes = {
  location: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  getWeather: React.PropTypes.func.isRequired
};




export default GetWeather;
