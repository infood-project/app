import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Constants } from 'expo';

import PanelTop from '../components/PanelTop';
import RestaurantCard from '../components/RestaurantCard';

export default class RestaurantsPage extends React.Component {

  constructor(props) {
    super(props);
    this.onShowMenu = this.onShowMenu.bind(this);
  }

  onShowMenu = (restaurant) => {
    this.props.navigation.navigate('RestaurantDetails', restaurant);
  }

  render() {
    const restaurants = [
      {
        name: 'slimfood',
        description: '#sallad #grekiskt',
        menu: [
          {
            title: 'Grekisk Sallad',
            tags: ['Fetaost', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Räksallad',
            tags: ['Räkor', 'Sallad', 'Rödlök', 'Paprika'],
            price: 89
          },
          {
            title: 'Kycklingsallad',
            tags: ['Kyckling', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Tonfisksallad',
            tags: ['Tonfisk', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          }
        ]
      },
      {
        name: 'paprika',
        description: '#juice #rawfood #grönsaker',
        menu: [
          {
            title: 'Grekisk Sallad',
            tags: ['Fetaost', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Räksallad',
            tags: ['Räkor', 'Sallad', 'Rödlök', 'Paprika'],
            price: 89
          },
          {
            title: 'Kycklingsallad',
            tags: ['Kyckling', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Tonfisksallad',
            tags: ['Tonfisk', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          }
        ]
      },
      {
        name: 'jensens bøfhus',
        description: '#biff #pommes #frites',
        menu: [
          {
            title: 'Grekisk Sallad',
            tags: ['Fetaost', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Räksallad',
            tags: ['Räkor', 'Sallad', 'Rödlök', 'Paprika'],
            price: 89
          },
          {
            title: 'Kycklingsallad',
            tags: ['Kyckling', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Tonfisksallad',
            tags: ['Tonfisk', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          }
        ]
      },
      {
        name: 'apan',
        description: '#asiatiskt #tofu',
        menu: [
          {
            title: 'Grekisk Sallad',
            tags: ['Fetaost', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Räksallad',
            tags: ['Räkor', 'Sallad', 'Rödlök', 'Paprika'],
            price: 89
          },
          {
            title: 'Kycklingsallad',
            tags: ['Kyckling', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          },
          {
            title: 'Tonfisksallad',
            tags: ['Tonfisk', 'Sallad', 'Rödlök', 'Paprika'],
            price: 79
          }
        ]
      }
    ]

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {restaurants.map((restaurant, i) => 
          <RestaurantCard 
            key={i} 
            restaurant={restaurant}
            onPress={this.onShowMenu}
          />
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
