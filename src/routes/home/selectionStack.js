import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Selection from '../../screens/home/selection';
import React from 'react';

const HomeStackNav = createStackNavigator();

const SelectionStack = ({ navigation }) => (
    <HomeStackNav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <HomeStackNav.Screen name="Selection" component={Selection} options={{
            headerTitle: () => <Header title='Início' navigation={navigation} />
        }} />
    </HomeStackNav.Navigator>
);

export default SelectionStack;