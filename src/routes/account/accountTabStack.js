import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { globalStyles } from '../../styles/global';
import ProfileStack from './profileStack';
import PaymentStack from './paymentStack';
import AddressesStack from './addressesStack';

const Tab = createMaterialBottomTabNavigator();


const AccountTabStack = () => (
    <Tab.Navigator
      initialRouteName="Profile"
      barStyle={globalStyles.borderAppColor}
      screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          
          if (route.name === 'Profile') {
            iconName = "face-profile";
          } else if (route.name === 'Payment') {
            iconName = "credit-card-multiple-outline";
          } else if (route.name === 'Addresses') {
            return <MaterialIcon name="local-post-office" size={26} color={focused ? 'white' : 'gray'} />;
          } 

          return <Icon name={iconName} size={26} color={focused ? 'white' : 'gray'} />;
        }
      })}
      activeColor='white'
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{tabBarLabel: 'perfil'}}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentStack}
        options={{tabBarLabel: 'Pagamentos'}}
      />
      <Tab.Screen
        name="Addresses"
        component={AddressesStack}
        options={{tabBarLabel: 'Endereços'}}
      />
    </Tab.Navigator>
);

export default AccountTabStack;
