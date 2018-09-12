import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';

import RestaurantCard from '../components/RestaurantCard';

/**
 * Sidan för varukorgen
 */
export default class CartPage extends React.Component {
  render() {
    const restaurants = [
      {
        name: 'slimfood',
        description: '#sallad #grekiskt'
      },
    ]

    // ScrollView används så att man kan scrolla ner på sidan
    // Använder restaurang-korten och skickar med vilken restaurang det gäller
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {restaurants.map((restaurant, i) => 
          <RestaurantCard key={i} restaurant={restaurant} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight - 10,
  },
});
