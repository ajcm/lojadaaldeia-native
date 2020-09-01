import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {useGetRemote} from '../remote/Remote'
import { withAuthenticator } from 'aws-amplify-react-native'

const  UserDetail = ({api,section}) => {

    const [state] = useGetRemote(api,section)


  



  

    return (
    <View >
        <Text> --{state && state.Item ? state.Item.name : ''}</Text>

    </View>    
    )
}



export default withAuthenticator(UserDetail)