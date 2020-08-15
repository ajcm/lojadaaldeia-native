import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Smokes from '../screens/smokes';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Wines: {
    screen: Smokes,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Fumeiros' navigation={navigation} />
      }
    }
  }
};

const SmokesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default SmokesStack;