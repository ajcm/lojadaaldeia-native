import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../screens/auth/splash';
import SignIn from '../screens/auth/signIn';
import SignUp from '../screens/auth/signUp';
import RedefinePassword from '../screens/auth/redefinePassword';
import SendCodeToEmail from '../screens/auth/sendCodeToEmail';
import ConfirmSignUp from '../screens/auth/confirmSignUp';
import Home from '../screens/home/home';


const RS = createStackNavigator();

const AuthStack = ({navigation}) => (
    <NavigationContainer>
        <RS.Navigator headerMode='none'>
            <RS.Screen name="Splash" component={Splash}/> 
            <RS.Screen name="SignIn" component={SignIn}/>
            <RS.Screen name="SignUp" component={SignUp}/>
            <RS.Screen name="SendCodeToEmail" component={SendCodeToEmail}/>
            <RS.Screen name="RedefinePassword" component={RedefinePassword}/>
            <RS.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
            <RS.Screen name="Home" component={Home}/>
        </RS.Navigator>
    </NavigationContainer>
);

export default AuthStack;