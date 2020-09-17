import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import SuppliersList from '../../screens/suppliers/suppliersList';
import React from 'react';

const Nav = createStackNavigator();

const SuppliersListStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="SuppliersList" component={SuppliersList} options={{
            headerTitle: () => <Header title='Fornecedores' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default SuppliersListStack;