import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SettingsActions from '../state/actions/settings';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import styled, { ThemeProvider } from 'styled-components/native';

import DrawerContent from './drawerContent';
import HomeTabStack from './home/homeTabStack';
import ProductsTabStack from './products/productsTabStack';
import AboutTabStack from './about/aboutTabStack';


const Drawer = createDrawerNavigator();

function AppStack() {    

    return (
        // <ThemeProvider theme={this.props.theme}>
            <Drawer.Navigator drawerContent={p => <DrawerContent {...p} />}>
                <Drawer.Screen name="Home" component={HomeTabStack} />
                <Drawer.Screen name="Products" component={ProductsTabStack} />
                <Drawer.Screen name="About" component={AboutTabStack} />            
            </Drawer.Navigator>
        // </ThemeProvider>
    );
}

const mapStateToProps = (state, ownProps) => ({ 
    isDarkTheme: state.settings.isDarkTheme
})

const mapDispatchToProps = dispatch => ({    
    actions: bindActionCreators(SettingsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppStack)