import React from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Card, ButtonGroup, ListItem } from 'react-native-elements'

import { images } from '../resources/images';

'../assets/images/restaurants/slimfood/main.jpg'

const SCREEN_WIDTH = Dimensions.get('window').width;

/**
 * Restaurang-menyn när man vill se menyn
 */
export default class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, menu } = this.props.restaurant;
        const buttons = ['Mat', 'Dryck']

        return (
            <View>
                <View>
                    <Card
                        image={images[name].uri}
                        overlayStyle={{ opacity: 0 }}
                        containerStyle={{ 
                            width: Dimensions.get('window').width,
                            marginBottom: 0,
                            borderWidth: 0
                        }}
                    >
                        <Text style={styles.imageTitle}>
                            {name.replace(/\w/, c => c.toUpperCase())} {/* Gör första bokstaven stor */}
                        </Text>
                    </Card>
                    <ButtonGroup
                        // onPress={this.updateIndex} -- Här kan man lägga till vad som händer
                        // när man trycker på ett meny-objekt
                        // selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={styles.buttonGroup}
                    />
                </View>
                <ScrollView>
                    {
                    menu.map((menuItem, i) => (
                    <ListItem
                        key={i}
                        title={menuItem.title}
                        titleStyle={styles.listItemTitle}
                        subtitle={menuItem.tags.toString().replace(/,/g, ', ')}
                        subtitleStyle={styles.listItemSubtitle}
                        rightIcon={{
                            name: 'add', 
                            marginRight: 20,
                            color: '#2089dc'}}
                        containerStyle={styles.listItem}
                        contentContainerStyle={styles.listItemContent}
                    />
                    ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageTitle: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonGroup: {
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 40,
    },
    listItem: {
        width: '100%',
    },
    listItemTitle: {
        color: '#4a4a4a',
        fontSize: 14
    },
    listItemSubtitle: {
        color: '#c3c3ba',
        fontSize: 12
    },
    listItemContent: {
        marginLeft: 20,
    },
});