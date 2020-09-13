import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../shared/header';
import { globalStyles } from '../../styles/global';

import Cheese from '../../screens/products/cheese';


const Nav = createStackNavigator();

const CheeseStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Cheese" component={Cheese} options={{
            headerTitle: () => <Header title='Queijos' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default CheeseStack;
