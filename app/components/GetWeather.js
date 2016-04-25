import React from 'react';

export default class GetWeather extends React.Component {
  static propTypes = {
    location: React.PropTypes.string,
  };

  state = {
    placeholder: 'St. Georgia, Utah'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <input className="form-controll" placeholder={this.state.placeholder} value="" type="text" />
            <button>Get weather</button>
        </div>
    );
  }
};