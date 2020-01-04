import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Router from './Router';

import "./App.scss";

import {
  SET_DUMMY
} from './constants'

class App extends React.Component {

  componentDidMount() {
    this.props.setDummy(true)
    let urlArray = [];
    localStorage.setItem("urlArray", JSON.stringify(urlArray));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Link to="/">Home</Link>
          {" "}
          <Link to="/admin">Admin</Link>
        </div>
        <Router />        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dummy: state.dummy
});

const mapDispatchToProps = (dispatch => ({
  setDummy: (bool) => {
    dispatch({type: SET_DUMMY, payload: bool})
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(App);
