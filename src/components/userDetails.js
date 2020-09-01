import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {useGetRemote} from '../remote/Remote'

export default function UserDetail({api,section}) {

    const [state] = useGetRemote(api,section)

    useEffect(() => init(),[]);
  
    const init = () => {

        console.log('load ************* ')

        API.get(api, section, {})
        .then(response => setState(response.Item))
        .catch(error => console.log(error)) 

       
       
    }
  




  

    return (
    <View >
        <Text>{state && state.Item ? state.Item.name : ''}</Text>
    </View>    
    )
}

