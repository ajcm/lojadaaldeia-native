import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { globalStyles } from '../../styles/global';
import WineStack from './wineStack';
import CheeseStack from './cheeseStack';
import SmokeStack from './smokeStack';


const Tab = createMaterialBottomTabNavigator();

const SuppliersTabStack = () => (
    <Tab.Navigator
      initialRouteName="Wine"
      barStyle={globalStyles.borderAppColor}
      screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          
          if (route.name === 'Wine') {
            iconName = "bottle-wine";
          } else if (route.name === 'Cheese') {
            iconName = "alpha-p";
          } else if (route.name === 'Smoke') {
            iconName = "alpha-s";
          }

          return <Icon name={iconName} size={26} color={focused ? 'white' : 'gray'} />;
        }
      })}
      activeColor='white'
    >
      <Tab.Screen
        name="Wine"
        component={WineStack}
        options={{tabBarLabel: 'Inicio'}}
      />
      <Tab.Screen
        name="Cheese"
        component={CheeseStack}
        options={{tabBarLabel: 'Queijos'}}
      />
      <Tab.Screen
        name="Smoke"
        component={SmokeStack}
        options={{tabBarLabel: 'Fumeiros'}}
      />
    </Tab.Navigator>
);

export default SuppliersTabStack;
