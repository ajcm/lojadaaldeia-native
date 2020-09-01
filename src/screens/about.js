import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';

import {  Auth  } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import UserDetails from '../components/userDetails'



//https://docs.amplify.aws/ui/auth/authenticator/q/framework/react-native#using-withauthenticator-hoc

const About = ({ navigation })  => {


  const [formState, setFormState] = useState()

  useEffect(() => load(),[]);

  const load = () => {
      Auth.currentUserInfo()
      .then(response => {
          console.log(response.attributes)
          if (response.attributes){
              setFormState(response.attributes)
          }
      })
      .catch(error => console.log(error))        
  }


  return (
    <View style={globalStyles.container}>
        <Text>{formState ?  formState.email : ''}</Text>

        <UserDetails  api="userdetails-service" section="profile"/>
  
    </View>
  );
}


export default About