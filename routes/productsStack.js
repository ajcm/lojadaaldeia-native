import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Products from '../screens/products';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Products: {
    screen: Products,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Produtos' navigation={navigation} />
      }
    }
  }
};

const ProductsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default ProductsStack;