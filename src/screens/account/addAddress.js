import React, { useState, SafeAreaView } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as AccountActions from '../../state/actions/account';

function AddAddress(props) {
  return (
    <View style={styles.container}>
      <Text>new address</Text>
    </View>
    );  
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    backgroundColor: "white",
    paddingTop: 0,
    marginTop: 0,
  }
});

const mapStateToProps = (state, ownProps) => ({
  addresses: state.account.addresses
})

const mapDispatchToProps = dispatch => ({    
  actions: bindActionCreators(AccountActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)