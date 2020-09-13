import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import About from '../../screens/about/about';
import React from 'react';

const Nav = createStackNavigator();

const AboutStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="About" component={About} options={{
            headerTitle: () => <Header title='About' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default AboutStack;