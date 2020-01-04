import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//import components here
import Home from './pages/Home/Home.component';
import Admin from './pages/Admin/Admin.component';

class Router extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    )
  }
}

export default Router;