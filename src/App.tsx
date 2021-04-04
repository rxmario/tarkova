import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { StartViewContainer } from './components/start/components/Start.container';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StartViewContainer} />
      </Switch>
    </Router>
  );
}
