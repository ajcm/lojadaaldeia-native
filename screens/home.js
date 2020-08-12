import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import ShopList from '../components/shopList';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <ShopList navigation={navigation}></ShopList>
    </View>
  );
}


  