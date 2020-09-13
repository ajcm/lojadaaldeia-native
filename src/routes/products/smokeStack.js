import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Smoke from '../../screens/products/smoke';
import React from 'react';

const Nav = createStackNavigator();

const SmokeStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Smoke" component={Smoke} options={{
            headerTitle: () => <Header title='Fumeiros' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default SmokeStack;