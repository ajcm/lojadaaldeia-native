import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Providers from '../screens/providers';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Providers: {
    screen: Providers,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Casas' navigation={navigation} />
      }
    }
  }
};

const ProvidersStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default ProvidersStack;