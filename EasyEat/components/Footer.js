import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class Footer extends React.Component {
  render() {
    return (
    <View style={styles.footerView}>
        <Text style={{color: 'grey', fontSize: 12}}>
            Ny här?
        </Text>
        <Button
            title="Skapa ett konto"
            clear
            activeOpacity={0.5}
            titleStyle={{color: '#2089dc', fontSize: 12}}
            containerStyle={{marginTop: -10}}
            onPress={() => console.log('Account created')}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    footerView: {
      marginTop: 20,
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });