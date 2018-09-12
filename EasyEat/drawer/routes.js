/**
 * Den här modulen används för att navigera mellan olika sidor
 */

import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PanelTop from '../components/PanelTop';

// Hämta de olika sidorna från components
import LoginPage from '../containers/LoginPage';
import RestaurantsPage from '../containers/RestaurantsPage';
import RestaurantDetails from '../containers/RestaurantDetails';
import CartPage from '../containers/CartPage';
import ProfilePage from '../containers/ProfilePage';

// Liten special-inställning för android
const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

// Här har vi navigationen på restauranger-sidan
// Här kan man trycka på en restaurang, och komma till detaljer om den
// Läs mer här: https://reactnavigation.org/docs/en/stack-navigator.html
export const RestaurantsStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsPage,
    navigationOptions: {
      header: () => (
        <PanelTop />
      ),
    }
  },
  RestaurantDetails: {
    screen: RestaurantDetails,
    navigationOptions: ({ navigation }) => ({
      header: <PanelTop navigation={navigation} />,
    })
  }
}, {
  initialRouteName: 'Restaurants',
  backBehavior: 'initialRoute',
});

// Samma som ovan, fast på Varukorgs-sidan
export const CartStack = createStackNavigator({
  Cart: {
    screen: CartPage,
    navigationOptions: {
      header: () => (
        <PanelTop />
      ),
    }
  },
});

// Samma som ovan, fast på Profil-sidan
export const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      header: () => (
        <PanelTop />
      ),
    }
  },
});

// Här är en special-navigator som är tänkt att vara på första-sidan
// Här ska man kunna byta mellan logga in eller registrera sig
export const SignedOut = createStackNavigator({
  SignUp: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Registrering',
      headerStyle
    }
  },
  SignIn: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Logga in',
      headerStyle
    }
  }
});

// Om man är inloggad, så visa menyn i botten med
// vägar till restauranger, varukorg eller profil
// Läs mer här: https://reactnavigation.org/docs/en/bottom-tab-navigator.html
export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: RestaurantsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='home-outline'
            size={22}
            color={tintColor}
          />
        )
      }
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='cart-outline'
            size={22}
            color={tintColor}
          />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='account-outline'
            size={22}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ffffff',
      activeBackgroundColor: '#2089dc',
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

// Root-navigatorn som antingen tar en in till appen eller inte
// beroend på om man är inloggad eller ej.
// "false" är default-värdet, men skicka true med i parametern
// så ändras variabeln signedIn
export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};