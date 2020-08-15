import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Region from '../screens/region';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Region: {
    screen: Region,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='regiao' navigation={navigation} />
      }
    }
  }
};

const RegionStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default RegionStack;