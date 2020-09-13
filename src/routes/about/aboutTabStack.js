import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { globalStyles } from '../../styles/global';
import AboutStack from './aboutStack';
import ContactsStack from './contactsStack';


const Tab = createMaterialBottomTabNavigator();


const AboutTabStack = () => (
    <Tab.Navigator
      initialRouteName="About"
      barStyle={globalStyles.borderAppColor}
      screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          
          if (route.name === 'About') {
            iconName = "bottle-wine";
          } else if (route.name === 'Contacts') {
            iconName = "alpha-p";
          } 

          return <Icon name={iconName} size={26} color={focused ? 'white' : 'gray'} />;
        }
      })}
      activeColor='white'
    >
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{tabBarLabel: 'sobre'}}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsStack}
        options={{tabBarLabel: 'Contactos'}}
      />
    </Tab.Navigator>
);

export default AboutTabStack;
