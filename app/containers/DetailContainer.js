import React from 'react';
import {Detail} from '../components/Detail';

export default class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Detail city={this.props.routeParams.city} weather={this.props.location.state.weather} />);
  }
}
