import React from 'react';

import Firebase from './cloud/Firebase'
import Auth from "./cloud/Authorization";

import LoginPage from './containers/LoginPage';
import RestaurantsPage from './containers/RestaurantsPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
    Firebase.init();
  }

  componentDidMount() {
    this.removeListener = Auth.getUserStatus((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return !this.state.user ? <LoginPage /> : (
      <RestaurantsPage />
    )
    
  }
}
