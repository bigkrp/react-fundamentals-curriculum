import React from 'react';

const GetWeather = (props) => {
    let placeholder = props.placeholder || 'St. Georgia, Utah';

    /* jshint ignore:start */
    return (
        <div className={"getweather__holder_"+props.location}>
            <input className="form-control" placeholder={placeholder} value="" type="text" />
            <button className="btn btn-success">Get weather</button>
        </div>
    );
    /* jshint ignore:end */
};

GetWeather.propTypes = {
    location: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string
};




export default GetWeather;
