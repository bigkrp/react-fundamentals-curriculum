import React from 'react';
import MainHeader from '../components/MainHeader';

export default class Main extends React.Component {
  static propTypes = {
    name    : React.PropTypes.string,
    children: React.PropTypes.element
  };
  state = {
    sectionHeight: '100%'
  }

  constructor(props) {
    super(props);
  }

  mainHeaderMouned( headerHeight ) {
    let newHeight = 100 - headerHeight;

    this.setState({
      sectionHeight: newHeight + '%'
    });
  }

  render() {
    return (
      <div className="main-holder">
        <MainHeader title='Main' mainHeaderMouned={this.mainHeaderMouned.bind(this)} />
        <section className="main-container" style={{height:this.state.sectionHeight}}>
          {this.props.children}
        </section>
      </div>
    );
  }
}
