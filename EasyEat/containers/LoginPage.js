import React from 'react';
import { StyleSheet, View } from 'react-native';

import PanelTop from '../components/PanelTop';
import Login from '../components/Login'
import Footer from '../components/Footer'

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
