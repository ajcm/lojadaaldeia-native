import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Profile from '../../screens/account/profile';
import React from 'react';

const Nav = createStackNavigator();

const ProfileStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Profile" component={Profile} options={{
            headerTitle: () => <Header title='perfil' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default ProfileStack;