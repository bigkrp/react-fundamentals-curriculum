import React, {PropTypes} from 'react';
import {getFiveDaysForecast} from '../helpers/weatherAPI';
import {Forecast} from '../components/Forecast';

export default class ForecastContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    daysData: [],
    isLoading: true
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city);
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  }
  makeRequest(city) {
    getFiveDaysForecast(city)
      .then((resp)=>{
        this.setState({daysData: resp.data.list, isLoading: false});
      });

  }
  handleClick(weather) {
    console.log('weather:', weather);
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        daysData={this.state.daysData}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick} />
    );
  }
}
