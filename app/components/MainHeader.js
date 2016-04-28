import React from 'react';
import { findDOMNode } from 'react-dom';
import GetWeather from './GetWeather';

export default class MainHeader extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    mainHeaderMouned: React.PropTypes.func.isRequired
  };
  defaultProps = {
    title: 'Simple Title'
  };

  resizeHandler(){
    let bodyH  = document.body.clientHeight,
    componentH = findDOMNode(this).clientHeight,
    persentageH;

    persentageH = (componentH / bodyH) * 100;

    this.props.mainHeaderMouned(persentageH);
  }
  
  componentDidMount() {
    this.resizeHandler.call(this);

    window.addEventListener('resize', this.resizeHandler.bind(this));
  }

  render() {
    return (
      <header className="main-header">
        <h2 className="main-header__title">{this.props.title}</h2>
        <div className="main-header__get-weather">
          <GetWeather location="horisontal" />
        </div>
      </header>
    );
  }
};