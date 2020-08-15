import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Wines from '../screens/wines';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Wines: {
    screen: Wines,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Vinhos' navigation={navigation} />
      }
    }
  }
};

const WinesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default WinesStack;