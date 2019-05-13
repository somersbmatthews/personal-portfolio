import React, {Component} from 'react';
import Nav from './components/Nav';

import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends Component {
    render() {
      return (
        <StyleRoot>
          <div className='test' style={styles.fadeIn}>
          <h1>Test of Radium with react-animations with fadeIn</h1>
          </div>
        </StyleRoot>
      )
    };
}

export default App;

{/* <div className="App">
<div>About</div>
<div>Contact</div>
<div>Projects</div>          
</div> */}