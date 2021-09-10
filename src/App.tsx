import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link, NavLink
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import Twitter from './components/twitter';
// import Location from './components/location';
import {Resume} from './components/resume';
// import Fade from 'react-reveal/Fade';
// import TweenOne from 'rc-tween-one';
// import Texty from 'rc-texty';
// import { Element } from 'rc-scroll-anim';
// import BannerAnim, { Element } from 'rc-banner-anim';
import ProfileData from './interfaces/profile-data';

function App() {

  const [profileData, setProfileData] = useState<ProfileData | undefined>(undefined);

  useEffect(() => {
    loadProfileData();
  }, []);


  const loadProfileData = async () => {
    fetch("https://venukalam.github.io/portfolio/profile-data.json")
      .then(response => response.json())
      .then((data: ProfileData) => {
        setProfileData(data);
        console.log(data);
      });
  };

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <NavLink className="nav-link" exact to="/resume">
          Resume
        </NavLink>
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
        <Switch>
          {/* <Route exact path="/" component={Resume} /> */}
          <Route exact path="/resume" render={(props) => <Resume profileData={profileData} />} />
          {/* <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} /> */}
          {/* <Route component={function NotFound() {
            return (<h1>Page not found</h1>)
          }} /> */}
        </Switch>
        {/* <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Reed Barger
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 hover:text-white">
              Testimonials
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
          </a>
        </div>
      </header>
      <Fade right>
        <h1>Teting CI/CD</h1>
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
      </BannerAnim> */}
      </div>
    </Router>
  );
}

export default App;
