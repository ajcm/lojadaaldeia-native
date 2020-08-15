import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Footer from '../components/tabNavigator';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Footer: {
    screen: Footer,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='wines' navigation={navigation} />
      }
    }
  }
};

const TabStack = createBottomTabNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default TabStack;