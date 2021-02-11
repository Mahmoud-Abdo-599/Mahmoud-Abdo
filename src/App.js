import React from 'react';

import { Switch, Route, Router } from 'react-router-dom';

import './App.css';
import './sass/main.scss';

import Home from './pages/home-page';
import Navigation from './components/navigation';
import Portfolio from './pages/portfolio';
import About from './pages/about';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path='/Mahmoud-Abdo' component={Home} />
        <Route exact path='/Mahmoud-Abdo/Portfolio' component={Portfolio} />
        <Route exact path='/Mahmoud-Abdo/About-Me' component={About} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
