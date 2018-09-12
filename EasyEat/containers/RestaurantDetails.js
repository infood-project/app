import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Constants } from 'expo';

// Använder komponenten som visar restaurang-menyn
import RestaurantMenu from '../components/RestaurantMenu';

/**
 * Sidan med restaurang-detaljer
 */
export default class RestaurantDetails extends React.Component {

  constructor(props) {
    super(props);
    this.onShowMenu = this.onShowMenu.bind(this);
  }

  onShowMenu = (restaurant) => {
    this.props.navigation.navigate('RestaurantDetails', restaurant);
  }

  render() {
    const restaurant = this.props.navigation.state.params;

    // Komponenten skickar med restaurangen till restaurang-komponenten
    return (
      <View style={styles.container}>
          <RestaurantMenu
            restaurant={restaurant}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
