import React from 'react';
import { Header } from 'react-native-elements';

export default class PanelTop extends React.Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: 'search', color: '#fff', opacity: .9 }}
        centerComponent={{ text: 'EasyEat', style: { color: '#fff', fontSize: 14, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'info-outline', color: '#fff', opacity: .9 }}
      />
    );
  }
}
