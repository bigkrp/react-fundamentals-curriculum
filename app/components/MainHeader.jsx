import React from 'react';
import { findDOMNode } from 'react-dom';
import {Link} from 'react-router';
import GetCityContainer  from '../containers/GetCityContainer';

export default class MainHeader extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    mainHeaderMouned: React.PropTypes.func.isRequired
  };
  defaultProps = {
    title: 'Simple Title'
  };

  resizeHandler(){
    let bodyH    = document.body.clientHeight,
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
        <h2 className="main-header__title">
          <Link to='/'>{this.props.title}</Link>
        </h2>
        <div className="main-header__get-weather">
          <GetCityContainer direction="horisontal" />
        </div>
      </header>
    );
  }
}
