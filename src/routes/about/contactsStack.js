import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Contacts from '../../screens/about/contacts';


const Nav = createStackNavigator();

const ContactsStack = ({ navigation }) => (
    <Nav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <Nav.Screen name="Contacts" component={Contacts} options={{
            headerTitle: () => <Header title='Contactos' navigation={navigation} />
        }} />
    </Nav.Navigator>
);

export default ContactsStack;
