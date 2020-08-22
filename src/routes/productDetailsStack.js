import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import React from 'react';

const ProductDetailsStackNav = createStackNavigator();

export default function ProductDetailsStack({ navigation }) {
    (<ProductDetailsStackNav.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: '#444',
            headerTitleStyle: {
                fontWeight: 'bold',
                backgroundColor: '#eee'                
            }
        }}>
            <ProductDetailsStackNav.Screen name="Home" component={Home} options={{
                title:'Home',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            
    </ProductDetailsStackNav.Navigator>);
}
