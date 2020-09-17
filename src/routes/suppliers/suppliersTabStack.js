import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { globalStyles } from '../../styles/global';
import SuppliersListStack from './suppliersListStack';


const Tab = createMaterialBottomTabNavigator();

const SuppliersTabStack = () => (
    <Tab.Navigator
      initialRouteName="SuppliersList"
      barStyle={globalStyles.borderAppColor}
      screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          
          if (route.name === 'SuppliersList') {
            iconName = "view-list";
          }

          return <Icon name={iconName} size={26} color={focused ? 'white' : 'gray'} />;
        }
      })}
      activeColor='white'
    >
      <Tab.Screen
        name="SuppliersList"
        component={SuppliersListStack}
        options={{tabBarLabel: 'fornecedores'}}
      />
    </Tab.Navigator>
);

export default SuppliersTabStack;
