import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';
import ShopList from '../components/shopList';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <ShopList navigation={navigation}></ShopList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'gray',
      color: 'yellow'
  }
});