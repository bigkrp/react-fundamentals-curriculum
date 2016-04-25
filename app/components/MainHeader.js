import React from 'react';
import GetWeather from './GetWeather';

export default class MainHeader extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
  };
  // static state = {
  //   title: 'Simple Title'
  // };
  defaultProps = {
    title: 'Simple Title'
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header className="main-header">
        <h1 className="main-header__title">{this.props.title}</h1>
        <div className="main-header__get-weather">
          <GetWeather location="horisontal" />
        </div>
      </header>
    );
  }
};