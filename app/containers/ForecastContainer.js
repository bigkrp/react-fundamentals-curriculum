import React, {PropTypes} from 'react';
import {getFiveDaysForecast} from '../helpers/weatherAPI';
import {Forecast} from '../components/Forecast';

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    daysData: null,
    isLoading: true
  }
  componentWillMount(){
    getFiveDaysForecast(this.props.routeParams.city)
      .then((resp)=>{
        this.setState({daysData: resp.data.list, isLoading: false});
        console.log(this.state);
      });
  }
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        daysData={this.state.daysData}
        isLoading={this.state.isLoading} />
    );
  }
};

ForecastContainer.propTypes = {
};