import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Selection from '../screens/selection';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Selection: {
    screen: Selection,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='seleção' navigation={navigation} />
      }
    }
  }
};

const SelectionStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default SelectionStack;