import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'renderer/containers/Login';
import HomePage from './containers/HomePage';
import TitleBar from './components/TitleBar';

import 'renderer/App.global.scss'

interface Props { }

interface State { }

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" >
            <div className="window-wrapper">
              <TitleBar />
              <Login />
            </div>
          </Route>
          <Route path="/">
            <div className="window-wrapper">
              <TitleBar />
              <HomePage />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
