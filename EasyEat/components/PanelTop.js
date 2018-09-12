import React from 'react';
import { View, Text } from 'react-native';
import { Header, SearchBar, Overlay } from 'react-native-elements';

/**
 * Den översta panelen
 */
export default class PanelTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showInfo: false,
    }

    this.updateShowSearch = this.updateShowSearch.bind(this);
  }

  // Visa eller dölj sök-modalen
  updateShowSearch() {
    this.setState({ showSearch: !this.state.showSearch })
  }

  // Visa eller dölj info-modalen
  updateShowInfo() {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render() {
    // Alla komponenter får info från navigationsdatan i routes.js
    // Där kan man få information om vilken sida man är på
    // eller få funktioner för att ex. gå tillbaka
    const { navigation } = this.props;

    return (
      <View>
        <Header
          leftComponent={{
            icon: navigation ? 'arrow-back' : 'search',
            color: '#fff',
            opacity: .9,
            underlayColor: '#ffffff78',
            onPress: navigation ? () => navigation.goBack() : () => this.updateShowSearch(),
          }}
          centerComponent={{
            text: 'EasyEat',
            style: { color: '#fff', fontSize: 14, fontWeight: 'bold' }
          }}
          rightComponent={{
            icon: 'info-outline',
            color: '#fff',
            opacity: .9,
            onPress: () => this.updateShowInfo(),
          }}
        />
        {this.state.showSearch &&
          <SearchBar
            platform="ios"
            placeholder='Type Here...'
          />
        }
        <Overlay
          isVisible={false}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          style={{ zIndex: 10, position: 'absolute' }}
        >
          <Text>Skriv info här</Text>
        </Overlay>
      </View>
    );
  }
}