import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';
import ShopList from '../components/shopList';
import Footer from '../shared/footer';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <ShopList navigation={navigation}></ShopList>
        <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'blue',
      color: 'red'
  }
});