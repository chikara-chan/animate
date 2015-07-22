// use jsx to render html, do not modify simple.html
'use strict';

require('rc-css-transition/assets/index.css');
import CssTransition from 'rc-css-transition';
import React, {Component} from 'react';

let transitionEnter = true;
let remove = false;

const styles = {
  rect: {
    marginTop: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: 'red'
  }
}

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transitionEnter: true, 
      remove: true
    } 
    this.toggleAnimate = this.toggleAnimate.bind(this);
  }

  toggleAnimate() {
    this.setState({
      transitionEnter: !this.state.transitionEnter
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAnimate}>toggle</button>
        <CssTransition 
          transitionEnter={this.state.transitionEnter} 
          defaultTransitionEnter={true}
          remove={this.state.remove}
          transitionName="fade">
            <div style={styles.rect}></div>
        </CssTransition>
      </div>
    );
  }
}

React.render(<Demo />, document.getElementById('__react-content'));