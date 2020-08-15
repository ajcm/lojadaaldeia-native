import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import ProductDetails from '../screens/productDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Inicio' navigation={navigation} />
      }
    }
  },
  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: {
      title: 'Product Details'
    }
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default HomeStack;