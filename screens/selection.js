import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';


export default function Selection({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>selection page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  