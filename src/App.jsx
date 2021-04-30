import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Themes/App.scss';
import Topbar from './Navigation/TopBar'
import {
  PROJECT_URL,
  ABOUT_URL,
  CONTACT_URL,
  RESUME_URL,
} from './Constants/appUrls';
import BottomBar from './Navigation/BottomBar';
import Navigations from './Navigation/Navigations'
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="top-navbar-container">
            <Topbar />
            <div className="navbar-container">
              <Navigations />
            </div>
          </div>
          <div className="bottom-bar-container">
            <BottomBar />
          </div>

          <section className="main-section">
            <div className="sort-info">
              <p>Hi, I'm a UI/UX designer<br />based on Kathmandu, Nepal.</p>
            </div>
            <main className="main-container">
              <Switch>
                <Route exact path={PROJECT_URL}>
                  <Project></Project>
                </Route>
                <Route exact path={ABOUT_URL}>
                  <About></About>
                </Route>
                <Route exact path={CONTACT_URL}>
                  <Contact></Contact>
                </Route>

                <Route exact path={RESUME_URL}>
                  <Resume></Resume>
                </Route>
              </Switch>
            </main>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
