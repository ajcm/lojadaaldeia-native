import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Home from '../../screens/home/home';
import React from 'react';

const HomeStackNav = createStackNavigator();

const HomeStack = ({ navigation }) => (
    <HomeStackNav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <HomeStackNav.Screen name="Home" component={Home} options={{
            headerTitle: () => <Header title='Início' navigation={navigation} />
        }} />
    </HomeStackNav.Navigator>
);

export default HomeStack;