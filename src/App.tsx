import React from 'react';
import logo from './logo.svg';
import './App.css';
import Twitter from './components/social-media/twitter';
import Fade from 'react-reveal/Fade';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
// import { Element } from 'rc-scroll-anim';
import BannerAnim, { Element } from 'rc-banner-anim';
function App() {

  fetch("https://venukalam.github.io/portfolio/profile-data.json")
    .then(response => response.json())
    .then(data => console.log(data));
  return (
    <div className="App">
      <Fade right>
        <h1>hello world</h1>
      </Fade>
      <Texty>text</Texty>

      <Element className="pack-page">
        <div>demo</div>
      </Element>

      <BannerAnim>
        <Element key="demo1">
          <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
        </Element>
        <Element key="demo2">
          <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
        </Element>
      </BannerAnim>
    </div>
  );
}

export default App;
