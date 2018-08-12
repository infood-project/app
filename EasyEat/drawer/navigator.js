import { createStackNavigator } from 'react-navigation';

import RestaurantsPage from './containers/RestaurantsPage';
import RestaurantMenu from './containers/RestaurantsPage';


export default createStackNavigator({
    Home: {
      screen: RestaurantsPage
    },
    Cart: {

    },
    Profile: {

    },
    Menu: {
        screen: RestaurantMenu
    }
});