import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Wine from '../../screens/products/wine';
import React from 'react';

const HomeStackNav = createStackNavigator();

const HomeStack = ({ navigation }) => (
    <HomeStackNav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <HomeStackNav.Screen name="Wine" component={Wine} options={{
            headerTitle: () => <Header title='Início' navigation={navigation} />
        }} />
    </HomeStackNav.Navigator>
);

export default HomeStack;