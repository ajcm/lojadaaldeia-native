import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';


export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>about page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  