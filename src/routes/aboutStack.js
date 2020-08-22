import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '../styles/global';
import Header from '../shared/header';
import About from '../screens/about';
import React from 'react';


const AboutStackNav = createStackNavigator();

const AboutStack = ({ navigation }) => (
    <AboutStackNav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <AboutStackNav.Screen name="About" component={About} options={{
            headerTitle: () => <Header title='Inicio' navigation={navigation} />
        }} />
    </AboutStackNav.Navigator>
);

export default AboutStack;
