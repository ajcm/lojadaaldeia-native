import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ProductDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>ProductDetails Screen: {navigation.getParam('id')}</Text>
      <Footer navigation={navigation} />
    </View>
  );
}