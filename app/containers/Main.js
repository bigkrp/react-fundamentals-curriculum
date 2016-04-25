import React from 'react';
import MainHeader from '../components/MainHeader';

export default class Main extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="main-holder">
            <MainHeader title='Simple Title' />
            <section>
                {this.props.children}
            </section>
        </div>
    );
  }
}
