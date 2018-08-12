import React from 'react';
import { View, StyleSheet } from 'react-native';

import Firebase from './cloud/Firebase'
import Auth from "./cloud/Authorization";

import LoginPage from './containers/LoginPage';
import RestaurantsPage from './containers/RestaurantsPage';
import PanelTop from './components/PanelTop';
import PanelBottom from './components/PanelBottom';

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
    return (
      <View style={styles.container}>
        <PanelTop />
        {!this.state.user ? <LoginPage /> :
        <RestaurantsPage />}

        {this.state.user && 
        <PanelBottom />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});