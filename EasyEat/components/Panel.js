import React from 'react';
import { Header } from 'react-native-elements';

export default class Panel extends React.Component {
  render() {
    return (
      <Header
        centerComponent={{ text: 'EasyEat', style: { color: '#fff', fontSize: 16, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'shopping-cart', color: '#fff', opacity: .3 }}
      />
    );
  }
}
