import React from 'react';
import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

import { images } from '../resources/images';

/**
 * Restaurang-korten som visas i en lista på förstasidan
 */
export default class RestaurantCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props.restaurant;

        // TouchableOpacity innebär att man kan klicka på korten
        // Läs mer här: https://facebook.github.io/react-native/docs/touchableopacity
        // Kort-komponenten kommer härifrån https://react-native-training.github.io/react-native-elements/docs/card.html
        return (
            <TouchableOpacity onPress={() => this.props.onPress(this.props.restaurant)}>
                <Card
                    image={images[name].uri}
                    overlayStyle={{ opacity: 0 }}
                    containerStyle={{ width: Dimensions.get('window').width }}
                >
                    <Text style={styles.imageTitle}>{name.replace(/\w/, c => c.toUpperCase())}</Text>
                    <Text style={styles.imageDescription}>
                        <Text style={styles.imagePriceRange}>$ </Text>
                        {description}
                    </Text>
                </Card>
            </TouchableOpacity>
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