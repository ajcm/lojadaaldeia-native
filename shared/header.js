import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';


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
            <MaterialIcons name='menu' size={28} />
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
            <MaterialCommunityIcons name='account' size={28} />
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
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