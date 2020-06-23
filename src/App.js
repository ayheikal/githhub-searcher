import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
export default class App extends Component {
  render() {
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar title='Github-searcher' icon='fab fa-github-square ' />
              <div className='container'>
                <Alert></Alert>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <Fragment>
                        <Search />
                        <Users></Users>
                      </Fragment>
                    )}
                  ></Route>
                  <Route path='/about' component={About}></Route>
                  <Route
                    exact
                    path='/user/:login'
                    render={(props) => <User {...props} />}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  }
}
