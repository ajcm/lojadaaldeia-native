import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles } from '../../styles/global';
import Header from '../../shared/header';
import Promotions from '../../screens/home/promotions';
import React from 'react';

const HomeStackNav = createStackNavigator();

const PromotionsStack = ({ navigation }) => (
    <HomeStackNav.Navigator screenOptions={{ headerStyle: globalStyles.borderAppColor }}>
        <HomeStackNav.Screen name="Promotions" component={Promotions} options={{
            headerTitle: () => <Header title='Início' navigation={navigation} />
        }} />
    </HomeStackNav.Navigator>
);

export default PromotionsStack;