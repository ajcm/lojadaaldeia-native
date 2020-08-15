import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';


export default function Profile({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>profile page content here</Text>
        <Footer navigation={navigation} />
    </View>
  );
}


  