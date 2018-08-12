import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

'../assets/images/restaurants/slimfood/main.jpg'

export default class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props.restaurant;

        return (
        );
    }
}

const styles = StyleSheet.create({
    imageTitle: {
        color: '#000',
        fontSize: 18
    },
    imagePriceRange: {
        color: '#9197A3',
        fontSize: 12
    },
    imageDescription: {
        color: '#2189dc',
        fontSize: 12
    }
});