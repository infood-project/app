import React from 'react';
import { StyleSheet, View } from 'react-native';

import Login from '../components/Login'
import Footer from '../components/Footer'

/**
 * Logga in-sidan
 * Använder logga in-komponenten och en footer
 */
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
