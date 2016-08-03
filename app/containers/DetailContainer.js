import React from 'react';
import {Detail} from '../components/Detail';

export default class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.location.state.weather', this.props.location.state.weather);
    return (<Detail city={this.props.routeParams.city} weather={this.props.location.state.weather} />);
  }
}
