import React from 'react';

const GetWeather = (props) => {
  let placeholder = props.placeholder || 'St. Georgia, Utah';

  return (
    <div className={'getweather__holder_'+props.direction}>
      <input className="form-control" placeholder={placeholder} onKeyDown={props.onEnter} onChange={props.onUpdateCity} value={props.city} type="text" />
      <button className="btn btn-success" onClick={props.onSubmitCity}>Get weather</button>
    </div>
  );
};

GetWeather.propTypes = {
  direction   : React.PropTypes.string.isRequired,
  placeholder : React.PropTypes.string,
  onEnter     : React.PropTypes.func.isRequired,
  onSubmitCity: React.PropTypes.func.isRequired,
  onUpdateCity: React.PropTypes.func.isRequired,
  city        : React.PropTypes.string
};




export default GetWeather;
