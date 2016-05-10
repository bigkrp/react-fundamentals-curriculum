import React, {PropTypes} from 'react';
import GetWeather from '../components/GetWeather';

export default class GetCityContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  state = {
    city: ''
  }
  constructor(props) {
    super(props);

    this.handlerSubmitCity = this.handlerSubmitCity.bind(this);
    this.handlerUpdateCity = this.handlerUpdateCity.bind(this);
  }

  handlerSubmitCity(e){
    e.preventDefault();

    this.context.router.push('/forecast/' + this.state.city);
  }

  handlerUpdateCity(e){
    this.setState({
      city: e.target.value
    });
  }

  render() {
    return (<GetWeather
      direction    = {this.props.direction}
      onSubmitCity = {this.handlerSubmitCity}
      onUpdateCity = {this.handlerUpdateCity}
      city         = {this.state.city} />);
  }
}

GetCityContainer.propTypes = {
  direction: PropTypes.string.isRequired
};
