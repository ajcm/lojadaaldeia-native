import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createDrawerNavigator } from '@react-navigation/drawer';


import RootStack from './src/routes/rootStack';
import About from './src/screens/about';
import DrawerContent from './src/routes/drawerContent';
import MainTabStack from './src/routes/mainTabStack';
import * as SessionActions from './src/state/actions/session';


const Drawer = createDrawerNavigator();

const AppContent = (props) => {

  // useEffect(() => {
  //   setTimeout(async() => {
  //     props.actions.session.retrieveToken();
  //   }, 1000);
  // }, []);

  // if (props.isLoading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  if (props.userToken === null) return (<RootStack />);

  return (        
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainTabStack} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = state => {
  return { 
    isLoading: state.session.isLoading,
    userToken: state.session.userToken 
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
      session: bindActionCreators(SessionActions, dispatch)
  }
})

export default AppContent
