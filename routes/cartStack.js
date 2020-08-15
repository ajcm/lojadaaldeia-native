import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Cart from '../screens/cart';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Cart: {
    screen: Cart,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='carrinho de compras' navigation={navigation} />
      }
    }
  }
};

const CartStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default CartStack;