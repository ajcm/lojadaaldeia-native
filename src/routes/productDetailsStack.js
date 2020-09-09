import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ProductDetails from '../screens/productDetails';


const ProductDetailsStackNav = createStackNavigator();

const ProductDetailsStack = ({ navigation }) => (
    <ProductDetailsStackNav.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: '#444',
            headerTitleStyle: {
                fontWeight: 'bold',
                backgroundColor: '#eee'
            }
        }}>
            <ProductDetailsStackNav.Screen name="ProductDetails" component={ProductDetails} options={{
                title:'Home',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            
    </ProductDetailsStackNav.Navigator>
);


export default ProductDetailsStack;