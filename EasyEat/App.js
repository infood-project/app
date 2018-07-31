import React from 'react';
import { StyleSheet, View } from 'react-native';

import Panel from './components/Panel';
import Login from './components/Login'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Panel />
        <Login />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
