/*
* Här i början hämtar man alla beroenden och komponenter som behövs
* Först har vi React som erbjuder ett sätt att enkelt strukturera upp
* komponenter. Läs mer här: https://reactjs.org/
* Vi använder även React Native som är anpassat för mobiler. Läs mer här: https://facebook.github.io/react-native/
*/

import React from 'react';
// View används för att rendera en container där vyer kan visas i
// Stylesheet används för att lägga till stilar (css typ)
import { View, StyleSheet } from 'react-native';

// Två egenskapta komponenter för att styra kommunikationen mot firebase
import Firebase from './cloud/Firebase'
import Auth from "./cloud/Authorization";

// Navigatorn så navigerar mellan oliga sidor, och Logga in-sidan
import { createRootNavigator } from './drawer/routes';
import LoginPage from './containers/LoginPage';

/**
 * Det här är huvudkomponenten
 * Det är denna komponent som används vid start av appen
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
    Firebase.init();
  }

  // Precis innan appen visas, så kollar den mot firebase om användaren är autentierad
  componentDidMount() {
    this.removeListener = Auth.getUserStatus((user) => {
      this.setState({ user });
    });
  }

  // När stänger ner appen så kan vi stänga av lyssnaren som kolla om man är inloggad
  componentWillUnmount() {
    this.removeListener();
  }

  // Den här funktionen renderar innehållet i appen
  render() {
    // En navigator som hjälper till att navigera bland sidor
    const LayOut = createRootNavigator(this.state.user !== null)

    return (
      <View style={styles.container}>

        {!this.state.user ? <LoginPage /> :
        <LayOut />}
      </View>
    )
  }
}

// Här sätts stilar
// flex innebär hur långt sidan ska sträcka sig på mobilen
// i övrigt så är det samma konfigurationer som i css (e.g. "width: 10")
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});