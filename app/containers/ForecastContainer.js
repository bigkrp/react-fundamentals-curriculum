import React, {PropTypes} from 'react';
import {getFiveDaysForecast} from '../helpers/weatherAPI';

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    daysData: null
  }
  componentWillMount(){
    getFiveDaysForecast(this.props.routeParams.city)
      .then((resp)=>{
        this.setState({daysData: resp.data.list});
        console.log(this.state);
      });
  }
  render() {
    return (
      <div>
        {this.state.daysData.forEach((val, day)=>{
          <div>
            <div>{val.weather.icon}</div>
            <h2>Day {day}</h2>
            <h3>{val.weather.description}</h3>
          </div>
        })}
      </div>
    );
  }
}

ForecastContainer.propTypes = {
};
