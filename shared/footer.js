import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { NavigationActions } from 'react-navigation';
import { FontAwesome5, Entypo, AntDesign, Fontisto } from '@expo/vector-icons'; 
  

export default function Footer({ navigation }) {

  const navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Entypo name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <FontAwesome5 name="list-alt" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Providers')}>
          <Fontisto name="shopping-store" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Cart')}>
          <AntDesign name="shoppingcart" size={28} color="black" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 50,      
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  }
});


