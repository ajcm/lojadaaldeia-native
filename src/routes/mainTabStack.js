import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import { globalStyles } from '../styles/global';
import HomeStack from '../routes/homeStack';
import AboutStack from '../routes/aboutStack';


const Tab = createMaterialBottomTabNavigator();

const MainTabStack = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={globalStyles.borderAppColor}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" style={globalStyles.iconSize}  />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{
          tabBarLabel: 'Product Details',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-list-box" style={globalStyles.iconSize}  />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeStack}
        options={{
          tabBarLabel: 'Providers',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-appstore" style={globalStyles.iconSize}  />
          ),
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart" style={globalStyles.iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabStack;
