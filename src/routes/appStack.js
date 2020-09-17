import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as settingsActions from '../state/actions/settings';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled, { ThemeProvider } from 'styled-components/native';
import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import DrawerContent from './drawerContent';
import HomeTabStack from './home/homeTabStack';
import ProductsTabStack from './products/productsTabStack';
import AboutTabStack from './about/aboutTabStack';
import AccountTabStack from './account/accountTabStack';
import SuppliersListTabStack from './suppliers/suppliersTabStack';


const Drawer = createDrawerNavigator();

const AppStack = (props) => {  
    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
          ...NavigationDefaultTheme.colors,
          ...PaperDefaultTheme.colors,
          background: '#ffffff',
          text: '#333333'
        }
      }
    
      const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
          ...NavigationDarkTheme.colors,
          ...PaperDarkTheme.colors,
          background: '#333333',
          text: 'rgba(255, 255, 255, 0.68)',
          primary: 'rgba(255, 255, 255, 0.68)'
        }
      }  
      

    return (
        <NavigationContainer theme={props.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
            <Drawer.Navigator drawerContent={p => <DrawerContent {...p} />}>
                <Drawer.Screen name="Home" component={HomeTabStack} />
                <Drawer.Screen name="Products" component={ProductsTabStack} />
                <Drawer.Screen name="About" component={AboutTabStack} />
                <Drawer.Screen name="Account" component={AccountTabStack} />
                <Drawer.Screen name="SuppliersList" component={SuppliersListTabStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isDarkTheme: state.settings.isDarkTheme
})

const mapDispatchToProps = dispatch => ({    
    actions: bindActionCreators(settingsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppStack)