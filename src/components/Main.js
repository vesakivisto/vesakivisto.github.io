import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import CV from './CV';

class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <Switch>
            <Redirect exact from="" to="/about"/>
            <Route path="/about" component={About}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/cv" component={CV}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
