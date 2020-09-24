import React, { useState, SafeAreaView } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

import * as AccountActions from '../../state/actions/account';

function Addresses(props) {

  const pressHandler = () => {
    props.navigation.navigate('AddAddress');
  }

  const { colors } = useTheme();

  const renderAddressItem = ({item}) => (    
    <View style={styles.card} key={item.id}>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}
      >
        <View style={styles.cardContent}>
          <View style={styles.data}>
            <Text>{item.contactName}</Text>
            <Text>Contact: {item.phone}</Text>
            <Text>{item.address1}</Text>
            <Text>{item.address2}</Text>
            <Text>{item.city}, {item.zipCode}</Text>
          </View>
          <View style={styles.action}>
            <MaterialIcons name="edit" size={26} color="#1E90FF" />
            <MaterialIcons name="delete" size={26} color="gray" />
          </View>
        </View>
      </Animatable.View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.topAction} onPress={pressHandler}>
        <Ionicons style={styles.add} name="ios-add-circle-outline" size={40} color="gray" />      
      </TouchableOpacity>
      
      <FlatList
            keyExtractor={(item) => item.id.toString(2)}
            data={props.addresses}
            renderItem={renderAddressItem}
      />
    </View>
    );  
}

const styles = StyleSheet.create({  
  add: {
    marginRight: 15
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    backgroundColor: "white",
    paddingTop: 0,
    marginTop: 0,
  },
  topAction: {
    margin: 10,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  card: {
    margin: 10,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6    
  },
  cardContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 18,
      marginVertical: 10
  },
  action: {
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }  
});

const mapStateToProps = (state, ownProps) => ({
  addresses: state.account.addresses
})

const mapDispatchToProps = dispatch => ({    
  actions: bindActionCreators(AccountActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Addresses)