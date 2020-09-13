import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { globalStyles } from '../../styles/global';
import HomeStack from './homeStack';
import PromotionsStack from './promotionsStack';
import SelectionStack from './selectionStack';


const Tab = createMaterialBottomTabNavigator();

const HomeTabStack = () => (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={globalStyles.borderAppColor}
      screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          
          if (route.name === 'Home') {
            iconName = "home";
          } else if (route.name === 'Promotions') {
            iconName = "alpha-p";
          } else if (route.name === 'Selection') {
            iconName = "alpha-s";
          }

          return <Icon name={iconName} size={26} color={focused ? 'white' : 'gray'} />;
        }
      })}
      activeColor='white'
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{tabBarLabel: 'Inicio'}}
      />
      <Tab.Screen
        name="Promotions"
        component={PromotionsStack}
        options={{tabBarLabel: 'Promoções'}}
      />
      <Tab.Screen
        name="Selection"
        component={SelectionStack}
        options={{tabBarLabel: 'Selecção'}}
      />
    </Tab.Navigator>
);

export default HomeTabStack;
