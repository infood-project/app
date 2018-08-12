import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

const { width } = Dimensions.get('window');

export default class PanelBottom extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  home = () => <Icon
  name='home-outline'
  size={22}
  color={this.state.selectedIndex === 0 ? '#fff' : '#2189dc'}
  />
  cart = () => <Icon
    name='cart-outline'
    size={22}
    color={this.state.selectedIndex === 1 ? '#fff' : '#2189dc'}
  />
  profile = () => <Icon
    name='account-outline'
    size={22}
    color={this.state.selectedIndex === 2 ? '#fff' : '#2189dc'}
  />

  render() {
    const buttons = [
      { element: this.home },
      { element: this.cart },
      { element: this.profile }
    ];
    const { selectedIndex } = this.state;

    return (
      <LinearGradient
      colors={['#fff', '#e2e2e2']}
      style={{ opacity: .9 }}>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroup} />
    </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    backgroundColor: 'transparent',
    width: width,
    height: 55,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
    opacity: 1,
  },
});