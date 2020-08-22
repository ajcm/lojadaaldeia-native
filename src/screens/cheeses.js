import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../';


export default function Cheeses({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>cheeses page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  