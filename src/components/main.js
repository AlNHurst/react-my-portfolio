import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import LandingPage from './landingpage';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <Switch>
    <Route exact path="/aboutme" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)



export default Main;