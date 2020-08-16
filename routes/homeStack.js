import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Home from '../screens/home';
import ProductDetails from '../screens/productDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Inicio' navigation={navigation} style={styles.header} />
      }
    }
  },
  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: {
      title: 'Product Details'
    }
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    width: '110%'
  }
});

export default HomeStack;