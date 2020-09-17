import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Addresses from '../../screens/account/addresses';
import AddAddress from '../../screens/account/addAddress';


const Nav = createStackNavigator();

const AddressesStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Addresses" component={Addresses} options={{
            headerTitle: () => <Header title='Endereços' navigation={navigation} />
        }} />
        <Nav.Screen name="AddAddress" component={AddAddress} options={{
            headerTitle: () => <Header title='Novo Endereço' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default AddressesStack;