import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/splash';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';


const RS = createStackNavigator();

const RootStack = ({navigation}) => (
    <RS.Navigator headerMode='none'>
        <RS.Screen name="Splash" component={Splash}/> 
        <RS.Screen name="SignIn" component={SignIn}/>
        <RS.Screen name="SignUp" component={SignUp}/>
    </RS.Navigator>
);

export default RootStack;