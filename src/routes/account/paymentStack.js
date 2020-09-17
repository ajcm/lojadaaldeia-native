import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Payment from '../../screens/account/payment';


const Nav = createStackNavigator();

const PaymentStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Payment" component={Payment} options={{
            headerTitle: () => <Header title='Pagamentos' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default PaymentStack;
