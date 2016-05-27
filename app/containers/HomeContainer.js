import React from 'react';
import GetCityContainer  from '../containers/GetCityContainer';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="enter-city__container">
        <div className="enter-city">
          <h1 className="enter-city__title">Enter a City and State</h1>
          <div className="enter-city__get-weather">
              <GetCityContainer direction="vertical" />
          </div>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
};
