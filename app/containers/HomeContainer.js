import React from 'react';
import GetCityContainer  from '../containers/GetCityContainer';
// import GetWeather from '../components/GetWeather';

// import React, {PropTypes} from 'react';

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="enter-city">
        <h1 className="enter-city__title">Enter a City and State</h1>
        <div className="enter-city__get-weather">
            <GetCityContainer direction="vertical" />
        </div>
      </div>
    );
  }
}

ForecastContainer.propTypes = {
};

// let ForecastContainer = () => {
//   return (
//     <div className="enter-city">
//       <h1 className="enter-city__title">Enter a City and State</h1>
//       <div className="enter-city__get-weather">
//           <GetCityContainer direction="vertical" />
//       </div>
//     </div>
//   );
// };

// export default ForecastContainer;
