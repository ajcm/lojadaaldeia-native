import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/splash';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import RedefinePassword from '../screens/redefinePassword';
import SendCodeToEmail from '../screens/sendCodeToEmail';
import ConfirmSignUp from '../screens/confirmSignUp';
import Home from '../screens/home';


const RS = createStackNavigator();

const RootStack = ({navigation}) => (
    <RS.Navigator headerMode='none'>
        <RS.Screen name="Splash" component={Splash}/> 
        <RS.Screen name="SignIn" component={SignIn}/>
        <RS.Screen name="SignUp" component={SignUp}/>
        <RS.Screen name="SendCodeToEmail" component={SendCodeToEmail}/>
        <RS.Screen name="RedefinePassword" component={RedefinePassword}/>
        <RS.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
        <RS.Screen name="Home" component={Home}/>
    </RS.Navigator>
);

export default RootStack;