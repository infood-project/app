import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

/**
 * Profil-sidan
 */
export default class ProfilePage extends React.Component {
  render() {
    // De parterna med valbara listor man kan välja på
    const list1 = [
      {
        title: 'Profil',
        icon: 'account-circle',
      },
      {
        title: 'Inställningar',
        icon: 'settings',
      },
    ];

    const list2 = [
      {
        title: 'Kvittohistorik',
        icon: 'playlist-add-check',
      },
    ];

    // TODO: Lägg till onClick för att föra användaren vidare
    // Läs mer här: https://react-native-training.github.io/react-native-elements/docs/listitem.html
    return (
      <ScrollView>
          {
            list1.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{ color: 'black' }}
                subtitleStyle={{ color: 'black' }}
                leftIcon={{ name: item.icon, color: '#6f7b88' }}
                rightIcon={{ name: 'keyboard-arrow-right', color: '#6f7b88' }}
              />
            ))
          }

          <Divider style={styles.divider}/>

          {
            list2.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{ color: 'black' }}
                subtitleStyle={{ color: 'black' }}
                leftIcon={{ name: item.icon, color: '#6f7b88' }}
                rightIcon={{ name: 'keyboard-arrow-right', color: '#6f7b88' }}
              />
            ))
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});
