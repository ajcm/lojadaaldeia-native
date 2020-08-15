import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Cheeses from '../screens/cheeses';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Cheeses: {
    screen: Cheeses,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Queijos' navigation={navigation} />
      }
    }
  }
};

const CheesesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default CheesesStack;