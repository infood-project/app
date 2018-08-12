import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Constants } from 'expo';

import PanelTop from '../components/PanelTop';
import RestaurantCard from '../components/RestaurantCard';

export default class RestaurantsPage extends React.Component {
  render() {
    const restaurants = [
      {
        name: 'slimfood',
        description: '#sallad #grekiskt'
      },
      {
        name: 'paprika',
        description: '#juice #rawfood #grönsaker'
      },
      {
        name: 'jensens bøfhus',
        description: '#biff #pommes #frites'
      },
      {
        name: 'apan',
        description: '#asiatiskt #tofu'
      }
    ]

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
    paddingTop: Constants.statusBarHeight,
  },
});
