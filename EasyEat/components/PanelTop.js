import React from 'react';
import { View, Text } from 'react-native';
import { Header, SearchBar, Overlay } from 'react-native-elements';

export default class PanelTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showInfo: false,
    }

    this.updateShowSearch = this.updateShowSearch.bind(this);
  }

  updateShowSearch() {
    this.setState({ showSearch: !this.state.showSearch })
  }

  updateShowInfo() {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'search',
            color: '#fff',
            opacity: .9,
            underlayColor: '#ffffff78',
            onPress: () => this.updateShowSearch(),
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
          isVisible={true}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          style={{ zIndex: 10, position: 'absolute' }}
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    );
  }
}