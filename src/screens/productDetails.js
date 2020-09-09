import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ProductDetails({ navigation, route }) {
  { console.log(route) }
  return (
    <View style={globalStyles.container}>
      <Text>ProductDetails Screen: {route.params.id}</Text>
    </View>
  );
}