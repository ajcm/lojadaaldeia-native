import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';


export default function Smokes({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>smokes page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  