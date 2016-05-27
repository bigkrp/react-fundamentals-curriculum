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
  componentDidMount(){
    this.makeRequest(this.props.routeParams.city);
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  }
  makeRequest(city){
    getFiveDaysForecast(city)
      .then((resp)=>{
        this.setState({daysData: resp.data.list, isLoading: false});
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
}

ForecastContainer.propTypes = {

};
