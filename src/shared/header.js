import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { globalStyles } from '../styles/global';


export default function Header({ title, navigation }) {
        
    const [search, setSearch] = React.useState('');
      
    const updateSearch = (search) => {
      setSearch(search);
    };

    const clearSearch = () => {
      setSearch('');
    };    

    const openMenu = () => {
      navigation.openDrawer();
    }

    const navigateToScreen = () => {
      navigation.dispatch(NavigationActions.navigate({
        routeName: 'Profile'
      }));
    };

    return (
        <View style={styles.header}>
          <TouchableOpacity onPress={openMenu} style={styles.menuicon} >
            <MaterialIcons name='menu' style={globalStyles.iconSize} />
          </TouchableOpacity>
          <SearchBar
            round
            inputStyle={styles.searchInputStyle}
            containerStyle={styles.searchContainerStyle}
            inputContainerStyle={styles.searchInputContainerStyle}
            lightTheme={true}
            searchIcon={{ size: 18 }}
            placeholderTextColor={'black'}                
            placeholder="search..."
            onChangeText={updateSearch}
            onClear={clearSearch}
            value={search}
          />   
          <TouchableOpacity onPress={navigateToScreen} style={styles.profileIcon} >
            <Ionicons name="ios-cart" style={globalStyles.iconSize} />
          </TouchableOpacity>
        </View>        
      );
}

const styles = StyleSheet.create({
    searchInputStyle: {
      backgroundColor: 'white'
    },
    searchContainerStyle: {
      backgroundColor: 'white', 
      height: '60%', 
      padding: 0, 
      width: '60%', 
      borderWidth: 0, 
      borderRadius: 15
    },
    searchInputContainerStyle: {
      backgroundColor: 'white', 
      padding: 0, 
      height: '90%', 
      borderWidth: 1, 
      borderRadius: 15
    },
    header: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
    },
    menuicon: {
      position: 'absolute',
      left: 0    
    },
    profileIcon: {
      position: 'absolute',
      right: 16            
    }    
});