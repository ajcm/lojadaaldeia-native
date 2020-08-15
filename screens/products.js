import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';


export default function Products({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>products page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  